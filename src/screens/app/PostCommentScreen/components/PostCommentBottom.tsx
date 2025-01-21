import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function PostCommentBottom({hasNextPage, fetchNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable>
        <Text bold color="primary" textAlign="center" onPress={fetchNextPage}>
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
