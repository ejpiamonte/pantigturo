// app/hard/index.tsx 
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Hard() {

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
        <Text style={styles.title}>Difficult (Mahirap)</Text>
          <ScrollView contentContainerStyle={styles.moduleCards}>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/PagongAtMatsing')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H7.png')} />
                  <Text style={styles.cardText}>Si Pagong at Si Matsing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.card, styles.top]} onPress={() => router.push('/hard/AsoAtIpis')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H2.jpg')} />
                  <Text style={styles.cardText}>Si Aso at Si Ipis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/LanggamAtSiTipaklong')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H3.png')} />
                  <Text style={styles.cardText}>Si Langgam at Si Tipaklong</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/AlamatNgMangga')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H4.png')} />
                  <Text style={styles.cardText}>Alamat ng Mangga</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/MariaMakiling')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H5.png')} />
                  <Text style={styles.cardText}>Alamat ni Maria Makiling</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/BulkangMayon')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H6.png')} />
                  <Text style={styles.cardText}>Alamat ng Bulkang Mayon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.card, styles.top]} onPress={() => router.push('/hard/InahingManokAtSisiw')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H1.png')} />
                  <Text style={styles.cardText}>Ang Inahing Manok at Ang Kanyang Mga Sisiw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/BakitDalaDalaNiPagongAngKanyangBahay')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H8.png')} />
                  <Text style={styles.cardText}>Bakit Dala-dala ni Pagong ang Kanyang Bahay?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/AlamatNgParuParo')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H9.png')} />
                  <Text style={styles.cardText}>Alamat ng Paru-paro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/AlamatNgSaging')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H10.png')} />
                  <Text style={styles.cardText}>Alamat ng Saging</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/AlamatNgSampaguita')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H11.png')} />
                  <Text style={styles.cardText}>Alamat ng Sampaguita</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => router.push('/hard/AlamatNgWalingWaling')}>
                  <Image style ={styles.cardImage} source={require('../../assets/Covers/hardPics/H12.png')} />
                  <Text style={styles.cardText}>Alamat ng Waling-waling</Text>
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
    backgroundColor: 'rgba(206, 141, 123, .9)',
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