import {usePaginatedList} from '@domain';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
