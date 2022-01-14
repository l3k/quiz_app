import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

import {AppRoutes} from './src/routes/app.routes';
import {QuestionProvider} from './src/hooks/question';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <QuestionProvider>
        <AppRoutes />
      </QuestionProvider>
    </ThemeProvider>
  );
}
