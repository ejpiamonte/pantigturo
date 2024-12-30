import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Instructions() {
    const [page, setPage] = useState(1); // Page state for navigation
    const totalPages = 8; // Total number of pages
  
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
          <Text style={styles.header}>Instructions {"\n"} (Panuto)</Text>
  
          {/* Language Containers */}
          <View style={styles.languageContainer}>
            {page === 1 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    ENGLISH VERSION: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    Welcome to Pantigturo! Hi there, little friend! 🌟 Are you ready for an exciting adventure? Welcome to Pantigturo, 
                    a fun game where you'll learn, play, and discover amazing Filipino stories!
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    TAGALOG VERSION: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    Maligayang Pagdating sa Pantigturo! Kamusta, kaibigan? 🌟 Handa ka na ba sa masayang pakikipagsapalaran? 
                    Maligayang pagdating sa Pantigturo, isang laro na puno ng saya, kwento, at aral!
                  </Text>
                </View>
              </>
            )}


            {page === 2 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    How to Start: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    1. Open the app and listen to the happy background music.{'\n'}
                    2. See the big Pantigturo logo? Tap the Start button to begin!
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    Paano Magsimula: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    1. Buksan ang app at pakinggan ang masayang musika.{'\n'}
                    2. Nakita mo ang malaking logo ng Pantigturo? Pindutin ang Start para magsimula!
                  </Text>
                </View>
              </>
            )}


            {page === 3 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    Pick Your Challenge: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    • Choose a level: Easy, Medium, or Hard.{"\n"}
                    • Each level has cool Filipino stories just for you!
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                    Piliin ang Hamon: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    • Pumili ng lebel: Madali, Katamtaman, o Mahirap.{"\n"}
                    • Ang bawat lebel ay may magagandang kwentong Pilipino para sa iyo!
                  </Text>
                </View>
              </>
            )}


            {page === 4 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Find a Story: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>  
                •	Look at the list of stories.{"\n"}
                •	Tap the one you like to start reading or listening.
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Piliin ang Kwento: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>       
                •	Tingnan ang listahan ng mga kwento.{"\n"}
                •	Pindutin ang gustong kwento para magsimulang magbasa o makinig.
                  </Text>
                </View>
              </>
            )}


            {page === 5 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Enjoy the Story: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	The story will be read aloud for you. You can listen or read along.{"\n"}
                    •	Look closely and remember the story, it has clues for the game!{"\n"}
                    •	When you're ready, tap Go to Game to play!
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Magsaya sa Kwento: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Ang kwento ay babasahin para sa'yo! Pwede kang makinig o magbasa habang binabasa ito.{"\n"}
                    •	Intindihin ang kwento mabuti—may mga sagot doon!{"\n"}
                    •	Kapag handa ka na, pindutin ang Go to Game para maglaro!
                  </Text>
                </View>
              </>
            )}


            {page === 6 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  How to Play the Game: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Answer fun questions about the story.{"\n"}
                    •	Complete the words by picking the correct letters!{"\n"}
                    •	Finish all the questions to win.
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Paano Maglaro: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Sagutin ang mga tanong tungkol sa kwento.{"\n"}
                    •	Kumpletuhin ang mga pantig sa pagpili ng tamang letra!{"\n"}
                    •	Tapusin lahat ng tanong para manalo.
                  </Text>
                </View>
              </>
            )}


            {page === 7 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Your Score: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Your score shows how many questions you got right!{"\n"}
                    •	Check the main menu to see how well you did.
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Ang Iyong Iskor: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Ipakikita ng iskor mo kung gaano karaming tanong ang nasagot mo nang tama!{"\n"}
                    •	Tingnan ang Menu para makita ang iyong puntos.

                  </Text>
                </View>
              </>
            )}


            {page === 8 && (
              <>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Tips for Success: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Listen to the story carefully—it helps you find the answers.{"\n"}
                    •	Don't rush! Take your time and pick the right letters.
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.languageText, { fontWeight: "bold" }]}>
                  Mga Tip para Magtagumpay: {'\n'}
                  </Text>
                  <Text style={styles.languageText}>
                    •	Makinig nang mabuti sa kwento, nandun ang mga sagot!{"\n"}
                    •	Huwag magmadali! Mag-isip at pumili ng tamang sagot.
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
