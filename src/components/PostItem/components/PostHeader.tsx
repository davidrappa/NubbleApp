import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
