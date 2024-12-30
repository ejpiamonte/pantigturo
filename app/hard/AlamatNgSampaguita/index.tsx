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

  const audioFile = require('../../../assets/voiceover/ALAMATNGSAMPAGUITA.mp3');  // Example local audio file
  const navigationTarget = '/hard/AlamatNgSampaguita/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 1000, text: "Sa isang malayong bayan sa Norte ay may isang napakagandang dalaga na ang pangalan ay Liwayway." },
    { time: 8200, text: "Ang kagandahan ni Liwayway ay sumikat hanggang sa malalayong lugar. Hindi nakapagtataka kung bakit marami ang naging manliligaw sa kanya." },
    { time: 17300, text: "" },
    { time: 17500, text: "Mula sa hilaga, isang grupo ng mga mangangaso ang dumating sa lugar ni Liwayway." },
    { time: 23000, text: "Sa di-suwerteng pangyayari, si Tanggol, isa sa mga ito, ay inatake ng baboy-ramo." },
    { time: 28800, text: "Dinala si Tanggol sa ama ni Liwayway upang mabigyan ng pangunang lunas." },
    { time: 33200, text: "Sa pangyayaring ito, sila ay nagkasundo at nagkaibigan." },
    { time: 37600, text: "" },
    { time: 37800, text: "Dahil sa pagmamahalan, agad na umibig sina Liwayway at Tanggol sa isa't isa." },
    { time: 43000, text: "" },
    { time: 43900, text: "Nang gumaling si Tanggol, nagpaalam siya kay Liwayway at sa mga magulang nito." },
    { time: 49000, text: "Pangako niya na susunduin ang kanyang ama't ina upang hingin ang kamay ng dalaga." },
    { time: 54600, text: "Puno ng pangarap si Liwayway nang ihatid niya si Tanggol." },
    { time: 58000, text: "" },
    { time: 58200, text: "Ngunit biglang nawala ang pag-asa ni Liwayway na babalik si Tanggol tulad ng pangako nito." },
    { time: 64400, text: "Maraming buwan na ang lumipas mula nang umalis si Tanggol, ngunit walang balita na dumating sa kanya." },
    { time: 71400, text: "" },
    { time: 71600, text: "Isang dating manliligaw ang nagsimulang magpakalat ng tsismis na mayroon nang asawa si Tanggol, kaya hindi na ito babalik." },
    { time: 79600, text: "Napuno ng lungkot, pangungulila, at sama ng loob ang puso ni Liwayway." },
    { time: 85000, text: "Dahil sa sobrang lungkot, nagkasakit siya at ilang linggo lamang ang lumipas ay pumanaw na." },
    { time: 92500, text: "" },
    { time: 93200, text: "Bago siya mamatay, ang tanging naiwang salita ni Liwayway kay Tanggol ay, 'Isinusumpa kita! Sumpa kita...'" },
    { time: 101500, text: "" },
    { time: 101700, text: "Ilang araw matapos mailibing si Liwayway, dumating si Tanggol kasama ang kanyang mga magulang." },
    { time: 108000, text: "Anito ay hindi siya agad nakabalik dahil nagkasakit ang kanyang ina." },
    { time: 112300, text: "Hindi niya matanggap na wala na ang kanyang minamahal." },
    { time: 115400, text: "" },
    { time: 115600, text: "Sa sobrang lungkot, araw-araw ay nagdurugo ang puso ni Tanggol habang nagdadalamhati sa puntod ni Liwayway." },
    { time: 123000, text: "Hindi na rin siya bumalik sa kanyang sariling bayan upang bantayan ang puntod ng kanyang kasintahan." },
    { time: 129000, text: "" },
    { time: 129200, text: "Isang araw, napansin ni Tanggol na may tumubong halaman sa ibabaw ng puntod ni Liwayway." },
    { time: 135200, text: "Ang halamang ito ay patuloy na dinidilig ng kanyang mga luha." },
    { time: 139600, text: "Nang mamulaklak ang halaman, mayroon itong samyo na napakabango." },
    { time: 144200, text: "Tinawag niya itong 'sumpa kita,' ang huling mga salitang binigkas ni Liwayway bago siya pumanaw." },
    { time: 152000, text: "Ang 'sumpa kita' ang naging pinagmulan ng salitang 'sampaguita.'" },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Sampaguita</Text>
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
    textShadowColor: 'rgba(206, 141, 123, .8)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


