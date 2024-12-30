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

  const audioFile = require('../../../assets/voiceover/ALAMATNGPINYA.mp3');  // Example local audio file
  const navigationTarget = '/medium/AlamatNgPinya/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Noong mga unang panahon, may isang mag-ina na nanirahan sa isang malayong lugar." },
    { time: 7400, text: "Si Aling Rosa ang ina at si Pinang ang kanyang anak. Labis na mahal ni Aling Rosa ang kanyang nag-iisang anak." },
    { time: 16000, text: "Kaya't si Pinang ay lumaki sa layaw. Nais ng ina na turuan si Pinang ng mga gawain sa bahay," },
    { time: 23500, text: "ngunit palaging sinasabi ni Pinang na alam na niya kung paano gawin ang mga itinuturo ng ina." },
    { time: 30000, text: "Kaya't pinabayaan na lamang niya ang kanyang anak." },
    { time: 33700, text: "" },
    { time: 34000, text: "Isang araw, nagkasakit si Aling Rosa. Hindi siya makabangon at makagawa ng mga gawaing bahay." },
    { time: 42000, text: "Pinag-utos niya si Pinang na magluto ng lugaw." },
    { time: 46000, text: "Sinimulan ni Pinang ang pagluluto ngunit napabayaan ito dahil sa kanyang paglalaro. Ang lugaw ay nagdikit sa palayok at nasunog." },
    { time: 56500, text: "Nagpasya na lamang si Aling Rosa na magpasalamat, dahil kahit papaano ay naasikaso siya ng kanyang anak." },
    { time: 64000, text: "" },
    { time: 64500, text: "Habang tumatagal ang sakit ni Aling Rosa, napilitan si Pinang na magtrabaho sa bahay." },
    { time: 71000, text: "Isang araw, habang siya'y nagluluto, hindi niya mahanap ang posporo. Tinanong niya ang kanyang ina kung nasaan ito." },
    { time: 80000, text: "May pagkakataon din na hinahanap niya ang sandok. Ganito ang nangyayari muli at muli." },
    { time: 87000, text: "Walang bagay na hindi niya makita at agad niyang tinatanong ang kanyang ina." },
    { time: 92400, text: "Nababagot si Aling Rosa sa sunud-sunod na tanong ng anak kaya't nasabi niya:" },
    { time: 97500, text: "" },
    { time: 97800, text: "'Naku! Pinang, sana'y magkaroon ka ng maraming mata upang makita mo ang lahat ng bagay at hindi mo na kailangang tanungin ako nang paulit-ulit.'" },
    { time: 108500, text: "" },
    { time: 108800, text: "Dahil alam niyang galit na ang kanyang ina, hindi na nagsalita si Pinang. Lumabas siya upang hanapin ang sandok na hinahanap." },
    { time: 118500, text: "Pagdating ng gabi, wala na si Pinang sa bahay. Nag-aalala si Aling Rosa." },
    { time: 124300, text: "Tinatawag niya ang kanyang anak ngunit walang sumasagot. Napilitan siyang bumangon at maghanda ng pagkain." },
    { time: 132000, text: "" },
    { time: 132400, text: "Matapos ang ilang araw, gumaling na si Aling Rosa. Hinanap niya si Pinang." },
    { time: 138400, text: "Tinanong niya ang mga kapitbahay kung nakita nila ang kanyang anak." },
    { time: 142800, text: "Ngunit parang bula si Pinang, bigla na lamang nawala. Hindi na nakita ni Aling Rosa si Pinang." },
    { time: 151000, text: "" },
    { time: 151400, text: "Isang araw, may nakitang halaman si Aling Rosa sa kanyang bakuran." },
    { time: 156500, text: "Hindi niya alam kung anong klase ito ng halaman. Inalagaan niya ito nang mabuti hanggang sa ito'y magbunga." },
    { time: 165000, text: "Napakasorpresa ni Aling Rosa nang makita ang bunga nito. Ito ay hugis ulo ng tao at napapaligiran ng mga mata." },
    { time: 174200, text: "" },
    { time: 174600, text: "Bigla na lang naalala ni Aling Rosa ang huli niyang sinabi kay Pinang," },
    { time: 179600, text: "na sana'y magkaroon ito ng maraming mata para makita ang kanyang hinahanap." },
    { time: 186000, text: "Tahimik na umiyak si Aling Rosa, at malaki ang pagsisisi dahil naging totoo ang kanyang sinabi sa anak." },
    { time: 194200, text: "Inalagaan niya nang mabuti ang halaman at tinawag itong Pinang." },
    { time: 199200, text: "Sa paglipat-lipat ng salita ng mga tao, ang Pinang ay naging Pinya." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Pinya</Text>
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


