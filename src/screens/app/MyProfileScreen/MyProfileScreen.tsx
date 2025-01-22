import React from 'react';

import {useAuthCredentials} from '@services';
import {AppTabScreenProps} from 'src/routes/navigationType';

import {Box, Icon, Screen, Text} from '@components';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text>{name}</Text>}
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
}
