import React from 'react';
import {ListRenderItemInfo, Image, Dimensions, Pressable} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {Screen, Text} from '@components';
import {InfinityScrollList} from '@components';
import {useAppNavigation} from '@hooks';
import {AppTabScreenProps} from '@routes';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;

const ITEM_WITH =
  (SCREEN_WIDTH - ITEM_MARGIN - SCREEN_PADDING * 2) / NUM_COLUMNS;

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  const navigate = useAppNavigation();

  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Pressable
        onPress={() =>
          navigate.toPostDetails({
            postId: item.post.id,
            postAuthorId: item.author.id,
          })
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
        <Text mt="s4" semiBold>
          {item.author.username}
        </Text>
      </Pressable>
    );
  }

  return (
    <Screen title="Favoritos">
      <InfinityScrollList
        queryKey={[QueryKeys.FavoriteList]}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
