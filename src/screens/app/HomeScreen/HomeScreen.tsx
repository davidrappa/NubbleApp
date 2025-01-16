import React from 'react';

import {AppTabScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title={'Ir para as configurações'}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
