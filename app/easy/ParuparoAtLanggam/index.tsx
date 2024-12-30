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

  const audioFile = require('../../../assets/voiceover/PARUPAROATSILANGGAM.mp3');  // Example local audio file
  const navigationTarget = '/easy/ParuparoAtLanggam/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Napakagulat ni Paruparo habang tinitingnan niya si Langgam" },
    { time: 4200, text: "na paulit-ulit na nagdadala ng pagkain sa kanyang lungga sa ilalim ng puno." },
    { time: 9800, text: "'Ano'ng ginagawa mo diyan, kaibigang Langgam?" },
    { time: 12000, text: "Mukhang napapagod ka na pero hindi ka nagpapahinga,'" },
    { time: 16000, text: "tanong ni Paruparo. 'Bakit hindi ka sumasaya tulad ko?'" },
    { time: 20000, text: "" },
    { time: 20500, text: "'Mahirap,' sagot ni Langgam. 'Malapit na ang tag-ulan." },
    { time: 25000, text: "Mas maganda sana may nakahanda nang pagkain bago ito dumating.'" },
    { time: 28800, text: "" },
    { time: 29000, text: "'Kalokohan 'yan. Tingnan mo ako, hindi ako napapagod,' mayabang na sinabi ni Paruparo." },
    { time: 35200, text: "" },
    { time: 35500, text: "'Bakit nga ba?' Nagtataka si Langgam." },
    { time: 38000, text: "" },
    { time: 38200, text: "'Ito ang eksplanasyon. Nakikita mo ba 'yung kaibigan ko sa damuhan?' tinuro niya ang isang lugar malapit." },
    { time: 45800, text: "" },
    { time: 46000, text: "'Sino?' tanong ni Langgam." },
    { time: 48000, text: "" },
    { time: 48200, text: "'Si Tipaklong, kaibigan ko iyon. Alam mo," },
    { time: 51800, text: "matapang siya at palaging nagbibigay ng proteksyon sa akin." },
    { time: 55500, text: "Baka akala mo, dahil sa kanya, walang problema na darating sa akin,' nagyabang si Paruparo." },
    { time: 61800, text: "" },
    { time: 62000, text: "'Ah, ganun ba?' sabi ni Langgam." },
    { time: 65500, text: "" },
    { time: 65700, text: "'Simple lang 'yan, pare. Ngayon, kumakanta-kanta lang ako dito. Ikaw lang kasi,' sabi ni Paruparo." },
    { time: 72800, text: "" },
    { time: 73000, text: "'Wala akong aasahan kundi ang sarili ko. Kaya't kailangan ko magtrabaho nang husto,'" },
    { time: 77800, text: "mariing sabi ni Langgam. 'Oh sige, ipagpapatuloy ko na lang ang gawain ko.'" },
    { time: 83000, text: "" },
    { time: 83300, text: "Pagkatapos nilang mag-usap, naghiwalay sila. Sa mga susunod na araw," },
    { time: 88500, text: "umulan ng malakas. Hindi lang simpleng ulan, may bagyo at baha pa." },
    { time: 93500, text: "Mahirap lumabas at kung makakalabas man, walang mahanap na pagkain." },
    { time: 98200, text: "" },
    { time: 98500, text: "Lumala pa ang baha at hindi na madaanan dahil sa malalim na ilog at dagat." },
    { time: 104000, text: "Nagpatuloy ang pagbuhos ng ulan, na nagpahirap pa lalo sa kalagayan." },
    { time: 108800, text: "" },
    { time: 109200, text: "Ano kaya ang nangyari kay Langgam? Naroon siya sa kanyang lungga," },
    { time: 113500, text: "nagpapahinga at busog sa pagkain. Naisip niyang tumingin sa paligid." },
    { time: 118200, text: "At doon, nakita niya sina Paruparo at Tipaklong na palutang-lutang sa tubig," },
    { time: 124000, text: "patay. May dalawang ibong lumapit at agad na dinukot sila." },
    { time: 129200, text: "" },
    { time: 129500, text: "Natakot si Langgam sa nakita niya," },
    { time: 131200, text: "pero sabi niya sa sarili: 'Ang tiyaga nga ay may magandang bunga.'" },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Paru-Paro At Si Langgam</Text>
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


