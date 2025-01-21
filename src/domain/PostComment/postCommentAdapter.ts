import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentApi.created_at),
    author: {
      id: postCommentApi.user.id,
      profileURL: postCommentApi.user.profile_url,
      name: postCommentApi.user.full_name,
      userName: postCommentApi.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
