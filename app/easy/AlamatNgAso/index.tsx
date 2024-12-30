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

  const audioFile = require('../../../assets/voiceover/ALAMATNGASO.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgAso/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Pinatitibay ng lahat ang matibay na pagkakaibigan nina Masong at Lito." },
    { time: 5800, text: "Mula pa nang sila ay maliit pa, palaging magkasama" },
    { time: 9500, text: "at nag-aalalahanay sa bawat yugto ng kanilang buhay." },
    { time: 13000, text: "Sa kabila ng pagdaraan ng panahon, nananatili ang kanilang magandang" },
    { time: 17500, text: "samahan at pagtutulungan sa anumang hamon ng buhay." },
    { time: 21500, text: "" },
    { time: 21800, text: "Ngunit biglang nagbago ang lahat nang magkasakit ng malubha si Masong," },
    { time: 26300, text: "na humantong sa kanyang kamatayan." },
    { time: 29500, text: "Labis na nagdalamhati si Lito sa pagkawala ng kanyang kaibigan." },
    { time: 34000, text: "Hindi niya matanggap ang katotohanang wala na ang kanyang karamay." },
    { time: 38000, text: "Araw-araw niyang pinupuntahan ang puntod ni Masong," },
    { time: 41500, text: "nililinis at kinakausap na parang naroroon pa rin ito." },
    { time: 46800, text: "" },
    { time: 47300, text: "Isang araw, nadama ni Lito ang biglang pagbagsak ng kanyang kalusugan." },
    { time: 52500, text: "Hindi na niya kaya ang makipagsapalaran sa kalsada nang sa may puntod ng kaibigan." },
    { time: 58800, text: "Binawalan siya ng kanyang ina na magtungo sa libingan ni Masong." },
    { time: 62300, text: "Ilang araw siyang ganito, nahihilo at mahina." },
    { time: 66000, text: "" },
    { time: 67000, text: "Sa buong panahon ng kanyang pagkakasakit," },
    { time: 69800, text: "may isang maliit na hayop ang bumalik sa kanilang tahanan." },
    { time: 74000, text: "Palagi itong itinataboy ng kanyang ina," },
    { time: 76800, text: "ngunit lagi itong bumabalik at tila nagbabantay sa kanyang silid." },
    { time: 81000, text: "" },
    { time: 81200, text: "Nang magaling na si Lito, agad niyang pinuntahan ang puntod ni Masong." },
    { time: 86000, text: "Nakita niya ang hayop na lagi nilang itinataboy ng kanyang ina," },
    { time: 90000, text: "nakatayo sa tapat ng puntod at kawag ang buntot." },
    { time: 94200, text: "" },
    { time: 94600, text: "Mula noon, hindi na iniwan ng hayop si Lito. Matulog man siya o magising," },
    { time: 100600, text: "lagi itong nasa tabi niya, kumakawag sa buntot. Dahil sa hayop na ito," },
    { time: 106000, text: "unti-unting nalimutan ni Lito ang lungkot sa pagkamatay ni Masong." },
    { time: 110300, text: "" },
    { time: 110800, text: "Tinawag ni Lito ang hayop na Masong," },
    { time: 113500, text: "ngunit sa paglipas ng panahon," },
    { time: 115500, text: "naging aso na ang tawag nila dito." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Aso</Text>
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
  scrollViewContainer: {
    position: 'absolute',
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff000',
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


