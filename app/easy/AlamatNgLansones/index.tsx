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

  const audioFile = require('../../../assets/voiceover/ALAMATNGLANSONES.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgLansones/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 100, text: "Noong unang panahon sa isang bayan sa Laguna," },
    { time: 2800, text: "may isang puno na may bilugang hugis ang bunga." },
    { time: 6000, text: "Kahit hitik sa mga bilugang bunga, hindi ito pinapansin ng mga tao" },
    { time: 10800, text: "dahil sa takot sa nakatagong lason sa likod ng kaakit-akit na anyo ng bunga." },
    { time: 15500, text: "" },
    { time: 15800, text: "Isang araw, may isang manlalakbay na nagpahinga sa ilalim ng puno" },
    { time: 21000, text: "na may nakakalasong bunga. Sa gutom at pagod," },
    { time: 25000, text: "sinubukan niyang kainin ang bunga. Subalit nang makita ito ng ibang tao," },
    { time: 30000, text: "labis siyang binalaan at pinigilan. Ngunit hindi na ito maaaring pigilan," },
    { time: 35500, text: "at nang makain niya ang bunga, agad siyang nagdusa at namatay." },
    { time: 40300, text: "" },
    { time: 40500, text: "Isang matinding tagtuyot ang sumalanta sa bayan," },
    { time: 44500, text: "at ang mga tanim ay hindi umusbong maliban sa puno ng nakalalasong bunga." },
    { time: 49000, text: "Sa desperasyon, nanalangin ang mga tao sa Diyos upang tapusin ang tagtuyot." },
    { time: 54000, text: "" },
    { time: 54300, text: "Isang araw, dumating ang isang babaeng nagpapakanta sa bayan at tinungo ang puno ng lansones." },
    { time: 61500, text: "Hindi siya napigilan ng mga tao, at kahit binalaan," },
    { time: 65200, text: "nagpatuloy siya sa pagpitas at pagkain ng mga bunga." },
    { time: 69000, text: "" },
    { time: 69500, text: "Nagulat ang mga tao sa kakaibang pangyayari." },
    { time: 73000, text: "Sa kabila ng kanilang pag-aalala, walang nangyaring masama sa babaeng kumain ng bunga." },
    { time: 78000, text: "Sa halip, naging masaya pa siya at hindi na nasaktan." },
    { time: 82000, text: "" },
    { time: 82500, text: "Naglapit ang mga kabataan sa babaeng iyon," },
    { time: 86000, text: "at tinanong kung bakit hindi siya naapektuhan ng lason." },
    { time: 90000, text: "Tinanggap ng babae ang bunga at ipinakita ang kaaya-ayang laman nito." },
    { time: 95000, text: "Dahil sa kagutuman, isang bata ang nagtangkang tikman ang bunga, at masarap ito." },
    { time: 101500, text: "" },
    { time: 101800, text: "Dahil sa kakaibang pangyayari," },
    { time: 103500, text: "nagkaroon ng panibagong pagnanasa ang mga tao na tikman ang lansones." },
    { time: 108000, text: "Sa paglipas ng panahon, tinawag na nilang 'lansones' ang dating puno na may nakalalasong bunga." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Lansones</Text>
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


