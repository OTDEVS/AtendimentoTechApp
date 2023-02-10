import React from "react"
import 'react-native-gesture-handler';
import { SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native"

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { default as theme } from './src/customize/theme.json'
import { IoniconsPack } from "./src/customize/ionic-icons"


import LayoutApp from "./src/components/layout/Layout"
import { SessionProvider } from "./src/context/sessionContext";

export default function App() {
  return (
    <SessionProvider>
      <IconRegistry icons={IoniconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <StatusBar backgroundColor={theme['color-basic-200']} barStyle="dark-content" />
          <SafeAreaView style={style.style}>
            <LayoutApp />
          </SafeAreaView>
      </ApplicationProvider>
    </SessionProvider>
  );
}

const style = StyleSheet.create({
  style: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  }
})
