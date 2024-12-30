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

  const audioFile = require('../../../assets/voiceover/ANGDAGAATANGLEON.mp3');  // Example local audio file
  const navigationTarget = '/easy/AngDagaAtAngLeon/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Isang daga ang nagsaya na maglaro sa ibabaw ng isang tulog na leon." },
    { time: 6000, text: "Umakyat ito sa likuran ng leon at nang makarating sa tuktok, naglaro ito sa pagdausdos pababa." },
    { time: 12800, text: "" },
    { time: 13000, text: "Sa kasiyahan niya, hindi niya napansin na nagising ang leon." },
    { time: 17000, text: "Hinuli ng leon ang daga at hawak-hawakan ang buntot na tila balak na itong kainin." },
    { time: 23000, text: "Takot at umiiyak ang daga." },
    { time: 25000, text: "'Paumanhin kaibigan. Hindi ko sinasadya na guluhin ka habang natutulog." },
    { time: 30000, text: "Wala akong masamang balak. Gusto ko lang maglaro sa likuran mo." },
    { time: 34500, text: "Huwag mo akong kainin,' ang sabi ng daga." },
    { time: 37200, text: "" },
    { time: 37500, text: "Nakita ng leon ang tunay na panghihingi ng tawad sa mukha ng daga." },
    { time: 41500, text: "" },
    { time: 42000, text: "'Sige, pakakawalan kita pero huwag mo nang guluhin ang tulog ko sa susunod,' sabi ng leon." },
    { time: 48500, text: "" },
    { time: 48800, text: "'Salamat kaibigan. Balang araw," },
    { time: 51500, text: "magbabayad ako ng utang sa kabutihan mo,' sagot ng daga." },
    { time: 55500, text: "" },
    { time: 55800, text: "Matagal na panahon ang lumipas at isang araw, habang naglalakad sa gubat," },
    { time: 61000, text: "napansin ng daga ang isang lambat na nakabitin sa puno." },
    { time: 65000, text: "Lumapit siya at napagtanto na ang leon ang nahuli sa lambat na bitag ng mga mangangaso." },
    { time: 71200, text: "" },
    { time: 71500, text: "Agad umakyat ang daga sa puno at nginatngat ang lubid na nakatali sa lambat." },
    { time: 77000, text: "Naputol ang lubid at bumagsak ang lambat kasama ang leon." },
    { time: 81000, text: "Bumaba agad ang daga at tinulungan ang leon na makatakas." },
    { time: 85000, text: "" },
    { time: 85500, text: "'Utang ko ang aking buhay sa iyo,' pasasalamat ng leon sa kanyang kaibigang daga." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Daga At Ang Leon</Text>
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


