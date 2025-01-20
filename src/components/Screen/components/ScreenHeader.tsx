import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

const ICON_SIZE = 20;
export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      mb="s24"
      justifyContent="space-between"
      alignItems="center">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          alignItems="center"
          flexDirection="row">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
