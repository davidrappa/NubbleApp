import {QueryKeys, usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(
    [QueryKeys.PostCommentList, postId],
    getList,
  );
}
