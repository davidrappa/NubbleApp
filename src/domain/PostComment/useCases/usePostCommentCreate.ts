import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function createComment(message: string) {
    try {
      setLoading(true);
      await postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createComment, loading, error};
}
