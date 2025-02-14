export type ImageForUpload = {
  uri: string;
  name: string;
  type: 'image/png' | 'image/jpeg';
};

export type PhotoListPaginated = {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
};
