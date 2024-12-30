import React, { useEffect } from 'react';
import { View, Pressable, Text, StyleSheet, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Mainmenu() {
  
  const [fontsLoaded] = useFonts({
    'CabinetGrotesk-Extrabold': require('../../Fonts/CabinetGrotesk-Extrabold.ttf'),
    'Erode-Semibold': require('../../Fonts/Erode-Semibold.ttf'),
    'Erode-SemiboldItalic': require('../../Fonts/Erode-SemiboldItalic.ttf'),
    'Gambarino-Regular': require('../../Fonts/Gambarino-Regular.ttf'),
    'Inika-Bold': require('../../Fonts/Inika-Bold.ttf'),
    'Inika-Regular': require('../../Fonts/Inika-Regular.ttf'),
    'IrishGrover-Regular': require('../../Fonts/IrishGrover-Regular.ttf'),
    'Satoshi-Medium': require('../../Fonts/Satoshi-Medium.ttf'),
    'Synonym-Regular': require('../../Fonts/Synonym-Regular.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen().catch((error) =>
      console.error('Failed to hide splash screen:', error)
    );
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch((error) =>
      console.error('Failed to prevent auto hide splash screen:', error)
    );
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded and splash screen is hidden
  }

  return (
    <ImageBackground source={require("../../assets/Main-BG.png")} style={styles.background}>
      <View style={styles.container}>
        <Pressable style={[styles.button, styles.easy]} onPress={() => router.push("/difficultyscreen")}>
          <Text style={styles.title}>Play (Maglaro)</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.medium]} onPress={() => router.push("/instructions")}>
          <Text style={styles.title}>Instructions (Panuto)</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.hard]} onPress={() => router.push("/aboutus")}>
          <Text style={styles.title}>About Us (Tungkol Sa Amin)</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginTop: -150,
    fontSize: 35,
    fontFamily: 'IrishGrover-Regular',
    textAlign: 'center',
  },
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 35,
    height: 90,
    width: '78%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inika-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  easy: {
    backgroundColor: "rgba(234, 216, 192, 1)",
  },
  medium: {
    backgroundColor: "rgba(234, 216, 192, 1)",
  },
  hard: {
    backgroundColor: "rgba(234, 216, 192, 1)",
  },
});
