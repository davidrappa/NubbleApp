import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      ...pageParams,
      post_id,
    },
  });

  return response.data;
}

export const postCommentApi = {
  getList,
};
