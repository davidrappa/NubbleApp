import {Post, PostAPI} from './postTypes';

/**
 * @description Adapta o PostAPI para o modelo de Post
 */
function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
      id: postAPI.user.id,
    },
    imageURL: postAPI.image_url,
    reactionCount: parseInt(postAPI.meta.like_count, 10),
    commentCount: parseInt(postAPI.meta.comments_count, 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
    reactions: postAPI.reactions.map(reaction => ({
      emojiType: reaction.emoji_type,
      postId: reaction.post_id,
    })),
  };
}

export const postAdapter = {
  toPost,
};
