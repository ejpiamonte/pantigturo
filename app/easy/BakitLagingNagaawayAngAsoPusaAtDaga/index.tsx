import React, {  } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import useLoadFonts from '../StoryFunctions/Fonts';
import AudioPlayer from '../StoryFunctions/Audio';

export default function App() {

  const { width, height } = Dimensions.get('window');

interface Lyric {
  time: number;
  text: string;
}

  const audioFile = require('../../../assets/voiceover/BAKITLAGINGNAGAAWAYANGASOPUSAATDAGA.mp3');  // Example local audio file
  const navigationTarget = '/easy/BakitLagingNagaawayAngAsoPusaAtDaga/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Noong unang panahon, ang mga hayop ay nagkakaintindihan at magkakaibigan." },
    { time: 6000, text: "Ang daigdig ay mapayapa at tila isang paraiso. Ang mga aso, pusa, at daga" },
    { time: 13200, text: "ay magkakaibigan at nagtutulungan sa kanilang mga pangangailangan." },
    { time: 17500, text: "Ngunit nagbago ang lahat dahil sa isang pangyayari." },
    { time: 21000, text: "" },
    { time: 21500, text: "Isang araw, umuwi ang aso na may dalang buto para sa kanyang mga kaibigang pusa at daga." },
    { time: 28500, text: "Ngunit wala ang dalawang ito dahil naghahanap pa sila ng pagkain." },
    { time: 33200, text: "Narinig ng aso ang ingay sa pintuan at iniwan niya ang buto para tignan ang kanyang amo." },
    { time: 39000, text: "" },
    { time: 39500, text: "Pagdating ng daga, nakita niya ang buto at dinala ito sa itaas ng bahay." },
    { time: 44500, text: "Nang bumalik ang aso at hindi na makita ang buto," },
    { time: 47500, text: "nagtulungan sila ng pusa sa paghahanap. Nang makita nila ang daga na may buto," },
    { time: 52800, text: "inakala ng aso at pusa na ninakaw ito ng daga." },
    { time: 56200, text: "" },
    { time: 56500, text: "Galit ang pusa at sinaway ang daga, kahit na nagpaliwanag ito." },
    { time: 61500, text: "Nag-away sila hanggang mawala ang buto." },
    { time: 64000, text: "Nasalo ito ng aso at kinain niya ang ikatlong bahagi," },
    { time: 69000, text: "at itinira ang iba para sa pusa at daga." },
    { time: 71500, text: "" },
    { time: 71800, text: "Nang dumating ang may-ari ng bahay, pinaghiwalay niya ang aso at pusa na nag-aaway." },
    { time: 77500, text: "Mula noon, naging magkaaway na sila at lagi nilang inaaway ang isa't isa." },
    { time: 83000, text: "Ganoon din ang pusa at daga, na ngayon ay lagi nang takot sa pusa." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bakit Laging Nag-aaway Ang Aso, Pusa At Daga?</Text>
        <AudioPlayer 
          audioFile={audioFile}
          navigationTarget={navigationTarget}
          lyrics={lyrics} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textShadowColor: 'rgba(190, 215, 220, .8)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


