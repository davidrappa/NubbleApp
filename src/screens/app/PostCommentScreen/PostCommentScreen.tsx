import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Screen, Text} from '@components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  return (
    <Screen title="Comentários" canGoBack>
      <Text>PostCommentScreen {postId}</Text>
    </Screen>
  );
}
