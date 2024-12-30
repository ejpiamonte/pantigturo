import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import createKvStore from 'expo-sqlite/kv-store';
import { useFocusEffect } from '@react-navigation/native';

const STORY_IDS = [
  'alamatngaso', // Easy Story 1
  'alamatngbutiki', // Easy Story 2
  'alamatngdurian',   // Easy Story 3
  'alamatnggagamba',   // Easy Story 4
  'alamatnglansones',   // Easy Story 5
  'alamatngpilipinas',   // Easy Story 6
  'alamatngrosas',   // Easy Story 7
  'angdagaatangleon',   // Easy Story 8
  'angkabayoatangkalabaw',   // Easy Story 9
  'bakitlagingnagaawayangasopusaatdaga',   // Easy Story 10
  'alitaptapatparuparo',   // Easy Story 11
  'paruparoatlanggam',   // Easy Story 12

  'alamatngampalaya',   // Medium Story 1
  'alamatngbahaghari',   // Medium Story 2
  'alamatngbayabas',   // Medium Story 3
  'alamatngkasoy',   // Medium Story 4
  'alamatngpinya',   // Medium Story 5
  'loboatkambing',   // Medium Story 6
  'maganaknalanggam',   // Medium Story 7
  'sikambingatkalabaw',   // Medium Story 8 
  'pagongatkalabaw',   // Medium Story 9
  'kunehoatpagong',   // Medium Story 10

  'alamatngmangga',   // Hard Story 1 
  'alamatngparuparo',   // Hard Story 2
  'alamatngsaging',   // Hard Story 3 
  'alamatNgsampaguita',   // Hard Story 4
  'alamatngwalingwaling',   // Hard Story 5 
  'asoatipis',   // Hard Story 6
  'bakitdaladalanipagongangkanyangbahay',   // Hard Story 7 
  'bulakangmayon',   // Hard Story 8
  'inahingmanokatsisiw',   // Hard Story 9 
  'langgamatsitipaklong',   // Hard Story 10
  'mariamakiling',   // Hard Story 11
  'pagongatmatsing',   // Hard Story 12
  // Add all your story IDs here
];

export default function DifficultyScreen() {
  const [completedEasy, setCompletedEasy] = useState(0);
  const [completedMedium, setCompletedMedium] = useState(0);
  const [completedHard, setCompletedHard] = useState(0);

  const fetchCompletedGames = async (difficulty: string, setCompleted: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
    try {
      let totalCompletedGames = 0;
      for (const storyId of STORY_IDS) {
        const savedData = await createKvStore.getItem(`completed${difficulty}_${storyId}`);
        const completedGames = savedData ? JSON.parse(savedData) : [];
        if (Array.isArray(completedGames)) {
          totalCompletedGames += completedGames.length;
        } else {
          console.error(`Completed games for story ${storyId} is not an array:`, completedGames);
        }
      }
      setCompleted(totalCompletedGames);
    } catch (error) {
      console.error(`Error fetching completed ${difficulty} games:`, error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCompletedGames('Easy', setCompletedEasy);
      fetchCompletedGames('Medium', setCompletedMedium);
      fetchCompletedGames('Hard', setCompletedHard);
    }, [])
  );

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

  // Check for completion and show alert if all games are completed
  useEffect(() => {
    const checkCompletion = async () => {
      const totalGames = STORY_IDS.length * 10; // Assuming each story has 10 games
      if (completedEasy >= totalGames) {
        Alert.alert(
          'Congratulations!',
          'You have completed all the games!',
          [{ text: 'OK', onPress: () => router.push('/congratulations') }]
        );
      }
    };

    checkCompletion();
  }, [completedEasy]);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded and splash screen is hidden
  }

  return (
    <ImageBackground source={require("../../assets/Main-BG.png")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Choose Your{"\n"}Difficulty Level{"\n"}</Text>
        <Pressable style={[styles.button, styles.easy]} onPress={() => router.push("/easy")}>
          <Text style={styles.title}>Easy{"\n"}(Madali) {completedEasy}/108</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.medium]} onPress={() => router.push("/medium")}>
          <Text style={styles.title}>Average{"\n"}(Katamtaman) {completedMedium}/90</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.hard]} onPress={() => router.push("/hard")}>
          <Text style={styles.title}>Difficult{"\n"}(Mahirap) {completedHard}/116</Text>
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
    marginBottom: 100,
    marginTop: -200,
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
    height: '12%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inika-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  easy: {
    backgroundColor: 'rgba(190, 215, 220, 1)',
  },
  medium: {
    backgroundColor: 'rgba(255, 249, 191, 1)',
  },
  hard: {
    backgroundColor: 'rgba(206, 141, 123, 1)',
  },
});
