import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components'

import theme from './src/theme'

import {  useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'


export default function App() {

  const [ fontsLoaded ] = useFonts( { NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      {
        fontsLoaded 
          ? <View style={styles.container}>
              <Text>Open up App.tsx to start working on your app!</Text>
            </View>
          : null
      }
     
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
