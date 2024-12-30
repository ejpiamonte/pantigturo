import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function AboutUs() {
    const [page, setPage] = useState(1); // Page state for navigation
    const totalPages = 7; // Total number of pages
  
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <Text style={styles.header}>About Us {"\n"} (Tungkol Sa Amin)</Text>
    
              {/* Language Containers */}
              <View style={styles.languageContainer}>
                {page === 1 && (
                  <>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        Mission Statement: {'\n'}
                      </Text>
                      <Text style={styles.languageText}>
                        The app is designed to enhance the learning experience of elementary students 
                        by introducing them to Filipino folk tales (alamat) and helping them learn Tagalog 
                        words in an interactive manner.
                      </Text>
                    </View>
                  </>
                )}


                {page === 2 && (
                  <>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        Development Team: {'\n'}
                      </Text>
                        <Image source={require('../../assets/DevTeam.jpg')} style={{width: 250, height: 200, 
                        alignSelf: 'center'}} />
                    </View>
                  </>
                )}
    
                {page === 3 && (
                  <>
                  <Text style={[styles.header, {fontSize: 24, marginBottom: 0, marginTop: -20}]}>Frequently Ask Questions (FAQs)</Text>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        1. What types of stories and games {"\n"}does the app offer? {'\n'}
                      </Text>
                      <Text style={styles.languageText}>
                        The app offers a variety of Philippine folktales categorized into three 
                        levels: Easy, Average, and Difficult. Each story comes with a corresponding game 
                        that focuses on basic word syllable segmentation and Filipino language learning 
                        and are related to the story itself.
                      </Text>
                    </View>
                  </>
                )}


                {page === 4 && (
                  <>
                  <Text style={[styles.header, {fontSize: 24, marginBottom: 0, marginTop: -20}]}>Frequently Ask Questions (FAQs)</Text>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        2. Does the app require user authentication? {'\n'}
                      </Text>
                      <Text style={styles.languageText}>  
                        Pantigturo does not require user authentication. 
                        The app is designed to be user-friendly and straightforward for 
                        elementary students to use without the need for accounts or logins.
                      </Text>
                    </View>
                  </>
                )}


                {page === 5 && (
                  <>
                  <Text style={[styles.header, {fontSize: 24, marginBottom: 0, marginTop: -20}]}>Frequently Ask Questions (FAQs)</Text>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        3. Do I need an internet {"\n"}connection to use the app? {'\n'}
                      </Text>
                      <Text style={styles.languageText}>
                        Pantigturo is fully functional offline. This ensures that students 
                        can use the app anytime and anywhere without relying on an internet connection.
                      </Text>
                    </View>
                  </>
                )}


                {page === 6 && (
                  <>
                  <Text style={[styles.header, {fontSize: 24, marginBottom: 0, marginTop: -20}]}>Frequently Ask Questions (FAQs)</Text>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        4. How can I provide feedback or suggestions? {'\n'}
                      </Text>
                      <Text style={styles.languageText}>
                        We welcome your feedback! Please feel free to email
                        us with any comments, suggestions, or questions. 
                        Your input helps us improve and make Pantigturo even 
                        better for young learners.
                      </Text>
                    </View>
                  </>
                )}
                

                {page === 7 && (
                  <>
                    <View style={styles.textContainer}>
                      <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                        Contact Information: {'\n'}
                      </Text>
                      <Text style={styles.languageText}>
                        Contact Us at {"\n"}
                        Gmail: Pantigturo@gmail.com
                      </Text>
                    </View>
                  </>
                )}
    
                
              </View>
    
              {/* Navigation Buttons */}
              <View style={styles.navigationContainer}>
                <Pressable
                  style={[styles.navButton, page === 1 ? styles.disabledButton : styles.backButton]}
                  onPress={() => page > 1 && setPage(page - 1)}
                  disabled={page === 1}
                >
                  <Text style={styles.navButtonText}>Back (Bumalik)</Text>
                </Pressable>
                <Pressable
                  style={[styles.navButton, page === totalPages ? styles.disabledButton : styles.nextButton]}
                  onPress={() => page < totalPages && setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  <Text style={styles.navButtonText}>Next (Kasunod)</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
  

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
    fontSize: 35,
    fontFamily: 'IrishGrover-Regular',
    textAlign: 'center',
  },
  languageContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: "rgba(234, 216, 192, .9)",
    padding: 10,
    borderRadius: 40,
    marginVertical: 5,
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Inika-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
  },
  backButton: {
    backgroundColor: "#fff82b",
    borderRadius: 20,
  },
  disabledButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
  },
  navButtonText: {
    color: "black",
    fontSize: 18,
    fontFamily: "Satoshi-Medium",
    textAlign: 'center',
  },
});
