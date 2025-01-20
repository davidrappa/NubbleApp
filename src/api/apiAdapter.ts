import {MetaDataPage} from '@types';

import {MetaDataPageAPI} from './apiTypes';

/**
 * @description Adapta a interface de metadados de uma página de dados de uma API para a interface de metadados de uma página de dados.
 */
function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
