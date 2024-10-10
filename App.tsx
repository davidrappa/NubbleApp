import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Coffstack</Text>
      <Text preset="paragraphCaption">Coffstack</Text>
      <Text preset="paragraphMedium">Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;
