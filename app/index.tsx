import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet, Pressable, Image, ImageBackground, Alert, StatusBar } from "react-native";
import { router, useFocusEffect } from "expo-router"; // Correct import for useFocusEffect
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { Audio, AVPlaybackStatus } from "expo-av"; // Import AVPlaybackStatus for audio

const HomePage = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null); // Proper state initialization
  const [fontsLoaded] = useFonts({
    'CabinetGrotesk-Extrabold': require('../Fonts/CabinetGrotesk-Extrabold.ttf'),
    'Erode-Semibold': require('../Fonts/Erode-Semibold.ttf'),
    'Erode-SemiboldItalic': require('../Fonts/Erode-SemiboldItalic.ttf'),
    'Gambarino-Regular': require('../Fonts/Gambarino-Regular.ttf'),
    'Inika-Bold': require('../Fonts/Inika-Bold.ttf'),
    'Inika-Regular': require('../Fonts/Inika-Regular.ttf'),
    'IrishGrover-Regular': require('../Fonts/IrishGrover-Regular.ttf'),
    'Satoshi-Medium': require('../Fonts/Satoshi-Medium.ttf'),
    'Synonym-Regular': require('../Fonts/Synonym-Regular.ttf'),
  });

  // Load or resume audio playback when the screen is focused
  useFocusEffect(
    useCallback(() => {
      const loadOrResumeAudio = async () => {
        if (sound) {
          const status = await sound.getStatusAsync();
          if (status.isLoaded && !status.isPlaying) {
            await sound.playAsync(); // Resume if paused
          } else if (!status.isLoaded) {
            await loadAudio(); // Load if not loaded
          }
        } else {
          await loadAudio(); // Load if sound is not set
        }
      };
  
      loadOrResumeAudio().catch((error) => {
        console.error('Failed to load or resume playback:', error);
      });
  
      return () => {
        if (sound) {
          sound.getStatusAsync().then((status) => {
            if (status.isLoaded) {
              sound.stopAsync().then(() => sound.unloadAsync());
            }
          }).catch((error) => console.error('Error unloading sound:', error));
        }
      };
    }, [sound])
  );

  // Load the audio when the component mounts
  const loadAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/Sawndepek.mp3'), // Replace with your audio
        { shouldPlay: false }, // Do not autoplay
        onPlaybackStatusUpdate // Handle playback updates
      );
      setSound(sound); // Save the sound instance to state
    } catch (error) {
      Alert.alert('Error', 'Failed to load the sound');
    }
  };

  useEffect(() => {
    // Hide the splash screen when fonts are loaded
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen().catch((error) =>
      console.error('Failed to hide splash screen:', error)
    );
  }, [fontsLoaded]);

  useEffect(() => {
    // Prevent splash screen auto-hiding until fonts are loaded
    SplashScreen.preventAutoHideAsync().catch((error) =>
      console.error('Failed to prevent auto hide splash screen:', error)
    );
  }, []);

  // Return null if fonts are not loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={require("../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Main-logo.png")} />
        <Text style={styles.title}>Pantigturo</Text>
        <Pressable style={styles.button} onPress={() => router.push("/mainmenu")}>
          <Text style={styles.btntitle}>Start (Simulan)</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

// Playback status update handler
function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
  if (!status.isLoaded) {
    console.warn('Audio is not loaded yet:', status.error || 'Unknown error');
    return;
  }

  if (status.isPlaying) {
    console.log('Audio is playing...');
  } else if (status.didJustFinish && !status.isLooping) {
    console.log('Playback finished');
  }
}


// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 30,
    marginTop: 20,
    height: '10%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "rgba(234, 216, 192, .9)",
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logo: {
    maxHeight: '26%',
    maxWidth: '78%',
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'IrishGrover-Regular',
  },
  btntitle: {
    fontSize: 25,
    fontFamily: 'Inika-Regular',
  },
});

export default HomePage;
