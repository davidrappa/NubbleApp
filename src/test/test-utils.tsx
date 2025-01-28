import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render, RenderOptions} from '@testing-library/react-native';

import {theme} from '@theme';

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender<T = unknown>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: AllTheProviders, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render};
