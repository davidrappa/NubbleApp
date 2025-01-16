import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular um delay na api

  await new Promise(resolve => setTimeout(() => resolve(''), 1000));

  return postListMock;
}

export const postApi = {
  getList,
};
