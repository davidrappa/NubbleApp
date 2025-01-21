import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}
export function PostCommentTextMessage({postId}: Props) {
  const {createComment} = usePostCommentCreate(postId);
  const [message, setMessage] = useState('');

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      value={message}
      placeholder="Adicione um comentário"
      onChangeText={setMessage}
      onPressSend={onPressSend}
    />
  );
}
