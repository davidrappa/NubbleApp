import {usePaginatedList} from '@domain';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
