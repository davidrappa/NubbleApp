import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, TextMessage} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentItem, PostCommentBottom} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list, hasNextPage, fetchNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          contentContainerStyle={{paddingBottom: bottom}}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <TextMessage
          placeholder="Adicione um comentário"
          onPressSend={() => {}}
        />
      </Box>
    </Screen>
  );
}
