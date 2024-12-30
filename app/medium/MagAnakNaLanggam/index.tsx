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

  const audioFile = require('../../../assets/voiceover/MAGANAKNALANGGAM.mp3');  // Example local audio file
  const navigationTarget = '/medium/MagAnakNaLanggam/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Malapit na naman ang panahon ng pag-ulan kaya't ang isang pamilya ng mga langgam ay lubos na abala sa paghahakot ng pagkain para sa kanilang tirahan." },
    { time: 11700, text: "" },
    { time: 11800, text: "'Huwag kayong lilihis ng daan patungo sa ating lungga dahil may maliit na kanal sa kaliwa,' paalala ni Tatay Langgam." },
    { time: 20900, text: "" },
    { time: 21000, text: "'Opo, Tatay,' tugon ni Unang Munting Langgam." },
    { time: 25000, text: "" },
    { time: 25200, text: "Seryoso ang bawat isa sa paghahakot ng pagkain kaya hindi nila napansin na unti-unti nang lumihis sa pila ang Bunsong Langgam." },
    { time: 35000, text: "" },
    { time: 35200, text: "'Nakakapagod na itong paghahakot ng pagkain. Tagal pa naman bago umulan, kaya't maghanda na ako,'" },
    { time: 43200, text: "sabi sa sarili ng Bunsong Langgam. 'Mas mabuti pang humanap ako ng mas masarap na pagkain.'" },
    { time: 50500, text: "" },
    { time: 50800, text: "Walang anu-ano, napansin niya ang isang kendi na malapit sa kanal, na ipinagbabawal na puntahan ng kanyang ama." },
    { time: 59000, text: "" },
    { time: 59200, text: "'Siguro naman ay hindi ako mahuhulog sa kanal kung dahan-dahan kong kukunin ang kendi.'" },
    { time: 65400, text: "" },
    { time: 65700, text: "Sa kanyang pagmamadali na kunin ang kendi, hindi niya napansin ang maliit na sinulid na kinapitan ng kanyang paa kaya't bigla siyang nahulog sa kanal." },
    { time: 76000, text: "" },
    { time: 76300, text: "Nag-aalala ang Amang Langgam nang hindi niya makita ang kanyang Bunsong anak sa pila." },
    { time: 82000, text: "Kaya't agad siyang umalis upang hanapin ito hanggang sa kanyang natagpuan sa ipinagbabawal na lugar." },
    { time: 90000, text: "Pagtingin niya sa ibaba, nakita niyang nakalutang sa tubig ang kanyang bunsong anak." },
    { time: 96000, text: "" },
    { time: 96200, text: "Masakit man sa kanya, nasambit niya sa sarili, 'Iyan ang napapala ng mga anak na matigas ang ulo.'" },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Mag-Anak Na Langgam</Text>
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
    textShadowColor: 'rgba(255, 249, 20, 1)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


