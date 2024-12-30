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

  const audioFile = require('../../../assets/voiceover/ALAMATNGAMPALAYA.mp3');  // Example local audio file
  const navigationTarget = '/medium/AlamatNgAmpalaya/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 1500, text: "Noong araw, sa bayan ng Sariwa, nanirahan ang lahat ng uri ng gulay na may kanya-kanyang kagandahang taglay." },
    { time: 10000, text: "" },
    { time: 11000, text: "Mayroong si Kalabasa na may kakaibang tamis, si Kamatis na may asim at malasutlang kutis," },
    { time: 18200, text: "si Luya na may anghang, si Labanos na sobrang kaputian, si Talong na may lilang balat," },
    { time: 26500, text: "si Mustasa na may luntiang pisngi, si Singkamas na may kakaibang lutong," },
    { time: 33000, text: "si Sibuyas na may manipis na balat, at si Patola na may gaspang na kaakit-akit." },
    { time: 39200, text: "" },
    { time: 39500, text: "Ngunit may isang gulay na umusbong na kakaiba ang anyo, siya si Ampalaya na may maputlang kulay," },
    { time: 47800, text: "at ang kanyang lasang taglay ay di maipaliwanag." },
    { time: 52000, text: "" },
    { time: 52200, text: "Araw-araw, walang ginawa si Ampalaya kundi ikumpara ang kanyang itsura at lasa sa kapwa niyang gulay," },
    { time: 60500, text: "at dahil dito ay nagbalak siya ng masama laban sa kanila." },
    { time: 65200, text: "" },
    { time: 65500, text: "Isang gabi, kinuha ni Ampalaya ang lahat ng magagandang katangian ng mga gulay at isinuot ito sa kanyang sarili." },
    { time: 74200, text: "" },
    { time: 74500, text: "Nang sumiklab ang araw, tuwang-tuwa si Ampalaya dahil ang dating gulay na hindi pinapansin ay biglang pinagkakaguluhan." },
    { time: 84500, text: "Ngunit walang sikreto ang hindi nabubunyag, at nagtipon ang mga gulay na ninakawan." },
    { time: 92500, text: "" },
    { time: 93000, text: "Napagkasunduan nilang sundan ang nagpakitang-gilas na gulay," },
    { time: 97800, text: "at nadismaya sila nang makita na hinuhubad nito isa-isa ang mga ninakaw na katangian." },
    { time: 104500, text: "Ang kanilang galit ay hindi napigilan nang makita si Ampalaya." },
    { time: 109500, text: "" },
    { time: 110000, text: "Nagalit ang mga gulay at kanilang iniharap si Ampalaya sa diwata ng lupain." },
    { time: 116200, text: "Isinumbong nila ang ginawang pagnanakaw ni Ampalaya. Dahil dito," },
    { time: 121500, text: "nagalit ang diwata at binalik ang lahat ng ninakaw na katangian sa kanilang mga may-ari." },
    { time: 127800, text: "" },
    { time: 128000, text: "Laking tuwa ni Ampalaya dahil iniisip niya na iyon lamang pala ang kabayaran sa kanyang kasalanan." },
    { time: 135000, text: "Subalit makalipas ang ilang sandali, nagbago ang anyo niya." },
    { time: 140500, text: "" },
    { time: 141000, text: "Ang kanyang balat ay kumulubot dahil ang kinis at gaspang na taglay ng upo at kamatis ay nag-away sa kanyang katawan." },
    { time: 150000, text: "Pati ang mga iba't ibang lasa ng gulay ay nagdulot ng hindi magandang panlasa sa kanya," },
    { time: 156800, text: "kaya't pait ang idinulot nito. Ang kanyang kulay ay naging madilim na luntian." },
    { time: 163200, text: "" },
    { time: 163800, text: "Ngayon, kahit masustansiyang gulay si Ampalaya, marami ang hindi nagkakagusto sa kanya dahil sa pait ng kanyang lasa." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Ampalaya</Text>
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


