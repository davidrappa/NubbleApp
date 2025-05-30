import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useMultimediaGetPhotos, usePermission} from '@services';
import {AppTabScreenProps} from 'src/routes/navigationType';

import {PermissionManager, PressableBox, Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = SCREEN_WIDTH / 4;

export function NewPostScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const permission = usePermission('photoLibrary');
  const {photoList, fetchNextPage} = useMultimediaGetPhotos(
    permission.status === 'granted',
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <PressableBox onPress={() => onSelectImage(item)}>
        <Image
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </PressableBox>
    );
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o Nubble acessar as images da sua galeria">
      <Screen canGoBack noPaddingHorizontal title="Novo post">
        <FlatList
          ref={flatListRef}
          numColumns={4}
          data={photoList}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={
            <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
          }
        />
      </Screen>
    </PermissionManager>
  );
}
