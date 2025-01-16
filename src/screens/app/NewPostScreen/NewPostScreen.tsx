import React from 'react';

import {AppTabScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text>NewPost Screen</Text>
      <Button
        title={'Ir para as configurações'}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
