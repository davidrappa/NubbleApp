import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
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
