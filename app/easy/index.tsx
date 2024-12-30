// app/easy/index.tsx 
import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Easy() {

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
  ];
  
  const [completedStories, setCompletedStories] = useState<Record<string, number>>({});

  const fetchCompletedGames = async () => {
    try {
      const newCompletedStories: Record<string, number> = {};
      for (const storyId of STORY_IDS) {
        const savedData = await AsyncStorage.getItem(`completed_${storyId}`);
        const completedGames = savedData ? JSON.parse(savedData) : [];
        newCompletedStories[storyId] = Array.isArray(completedGames) ? completedGames.length : 0;
      }
      setCompletedStories(newCompletedStories);
    } catch (error) {
      console.error('Error fetching completed games:', error);
    }
  };

  

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

  useFocusEffect(
    React.useCallback(() => {
      fetchCompletedGames();
    }, [])
  );
  
  return (
    <ImageBackground source={require ("../../assets/Main-BG.png")} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Easy (Madali)</Text>
          <ScrollView contentContainerStyle={styles.moduleCards}>
              <TouchableOpacity style={[styles.card, styles.top]} onPress={() => router.push('/easy/AlamatNgAso')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E1.png')} />
                  <Text style={styles.cardText}>Alamat ng Aso</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.card, styles.top]} onPress={() => router.push('/easy/AlamatNgButiki')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E2.png')} />
                  <Text style={styles.cardText}>Alamat ng Butiki</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlamatNgDurian')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E3.png')} />
                  <Text style={styles.cardText}>Alamat ng Durian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlamatNgGagamba')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E4.png')} />
                  <Text style={styles.cardText}>Alamat ng Gagamba</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlamatNgLansones')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E5.png')} />
                  <Text style={styles.cardText}>Alamat ng Lansones</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlamatNgPilipinas')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E6.png')} />
                  <Text style={styles.cardText}>Alamat ng Pilipinas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlamatNgRosas')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E7.png')} />
                  <Text style={styles.cardText}>Alamat ng Rosas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AngDagaAtAngLeon')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E8.png')} />
                  <Text style={styles.cardText}>Ang Daga at Ang Leon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AngKabayoAtAngKalabaw')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E9.png')} />
                  <Text style={styles.cardText}>Ang Kabayo at Ang Kalabaw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/BakitLagingNagaawayAngAsoPusaAtDaga')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E10.png')} />
                  <Text style={styles.cardText}>Bakit Laging Nag-aaway ang Aso, Pusa at Daga?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/AlitaptapAtParuparo')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E11.png')} />
                  <Text style={styles.cardText}>Si Alitaptap at Si Paru-paro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/easy/ParuparoAtLanggam')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/easyPics/E12.png')} />
                  <Text style={styles.cardText}>Si Paru-paro at Si Langgam</Text>
              </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontFamily: 'IrishGrover-Regular',
    fontSize: 50,
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
  },
  moduleLevel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  moduleCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  top: {
    marginTop: 20,
  },
  card: {
    width: '40%',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(190, 215, 220, .9)',
    borderRadius: 20,
  },
  cardImage: {
    width: '90%',
    height: 170,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 15,
  },
  cardText: {
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 7,
    fontFamily: 'Inika-Regular',
  },
});
function setCompletedEasy(value: number): void {
  throw new Error('Function not implemented.');
}

