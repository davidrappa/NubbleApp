import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Setting Screen</Text>
      <Button
        title={'Voltar para a Home'}
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'HomeScreen'})
        }
      />
    </Screen>
  );
}
