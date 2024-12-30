// app/medium/index.tsx 
import React, { useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Medium() {
  
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
    <ImageBackground source={require ("../../assets/Main-BG.png")} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Average (Katamtaman)</Text>
          <ScrollView contentContainerStyle={styles.moduleCards}>
              <TouchableOpacity style={[styles.card, styles.top]} onPress={() => router.push('/medium/AlamatNgAmpalaya')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M1.png')} />
                  <Text style={styles.cardText}>Alamat ng Ampalaya</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.card, styles.top]} onPress={() => router.push('/medium/AlamatNgBahaghari')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M2.png')} />
                  <Text style={styles.cardText}>Alamat ng Bahaghari</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/AlamatNgBayabas')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M3.png')} />
                  <Text style={styles.cardText}>Alamat ng Bayabas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/AlamatNgKasoy')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M4.png')} />
                  <Text style={styles.cardText}>Alamat ng Kasoy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/AlamatNgPinya')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M5.png')} />
                  <Text style={styles.cardText}>Alamat ng Pinya</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/LoboAtKambing')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M6.png')} />
                  <Text style={styles.cardText}>Ang Lobo at Ang Kambing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/MagAnakNaLanggam')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M7.jpg')} />
                  <Text style={styles.cardText}>Ang Mag-anak na Langgam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/SiKambingAtKalabaw')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M8.png')} />
                  <Text style={styles.cardText}>Ang Magkapitbahay na Si Kambing at Kalabaw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/PagongAtKalabaw')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M9.png')} />
                  <Text style={styles.cardText}>Ang Pagong at Ang Kalabaw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/medium/KunehoAtPagong')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/mediumPics/M10.png')} />
                  <Text style={styles.cardText}>Si Kuneho at Si Pagong</Text>
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
    alignItems: 'center',  // Center items horizontally
    justifyContent: 'center',  // Center items vertically
    backgroundColor: 'rgba(255, 249, 191, .9)',
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