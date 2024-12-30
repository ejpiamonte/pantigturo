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

  const audioFile = require('../../../assets/voiceover/KUNEHOATPAGONG.mp3');  // Example local audio file
  const navigationTarget = '/medium/KunehoAtPagong/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Isang araw, nagkrus ang landas ng Kuneho at ng Pagong. Ngumiti ang Kuneho nang makita ang Pagong." },
    { time: 8000, text: "" },
    { time: 8200, text: "'Hoy, Pagong!' sigaw ng Kuneho, 'ang ikli-ikli ng mga paa mo at ang bagal mo maglakad.'" },
    { time: 15000, text: "" },
    { time: 15200, text: "Hindi ipinahalata ng Pagong na naapektuhan siya." },
    { time: 19000, text: "Upang ipakita na mayroon din siyang maipagmamalaki, sinagot niya ang hambog na Kuneho." },
    { time: 25200, text: "" },
    { time: 25500, text: "'Eh, Kuneho, maaaring mabagal akong maglakad, ngunit siguradong tatalunin kita sa isang paligsahan." },
    { time: 33500, text: "Gusto mo bang subukan nating umakyat sa tuktok ng bundok pagdating ng bukas? Tatanggapin mo ba ang hamon ko?'" },
    { time: 41300, text: "" },
    { time: 41600, text: "Labis ang kasiyahan ng Kuneho sa hamon ng Pagong." },
    { time: 45600, text: "Tiwala siyang sa kabila ng kabagalan ng Pagong, siguradong mananalo siya." },
    { time: 51600, text: "Upang hiyain ang Pagong, ipinatawag ng Kuneho ang lahat ng kanyang kamag-anak." },
    { time: 58000, text: "" },
    { time: 58200, text: "Inutusan niya silang palakpakan siya kapag siya ay nakarating na sa tuktok ng bundok." },
    { time: 64300, text: "Pinag-utos din niya na asarin ang mabagal na kalaban." },
    { time: 68600, text: "" },
    { time: 68800, text: "Maaga dumating ang mga laban sa paanan ng bundok." },
    { time: 72700, text: "Maaga rin dumating ang iba't ibang hayop upang panoorin ang laban." },
    { time: 77100, text: "" },
    { time: 77400, text: "Napansin ng lahat na mas maraming kamag-anak si Pagong kaysa kay Kuneho," },
    { time: 82700, text: "at ang mga kamag-anak ni Kuneho ay maraming dumating." },
    { time: 86500, text: "" },
    { time: 86700, text: "Sa pagtunog ng unang araw, naghandang maglaban ang dalawa." },
    { time: 91200, text: "Ang mabilis na pagbaba ng kanang kamay ng Alamid ang tanda na simula na ang laban." },
    { time: 97100, text: "" },
    { time: 97400, text: "Nagsimulang umakyat ang dalawang kalaban." },
    { time: 100500, text: "Sumayaw-sayaw ang Kuneho nang pataas na parang hangin sa kanyang bilis." },
    { time: 105400, text: "Nang makarating na siya sa kalagitnaan ng bundok at lumingon pababa," },
    { time: 110400, text: "nakita niya ang mabagal na Pagong." },
    { time: 113000, text: "" },
    { time: 113200, text: "Nakiramay ang marami sa Pagong dahil sa kanyang kabagalan." },
    { time: 117100, text: "" },
    { time: 117300, text: "'Kaya mo 'yan! Kaya mo 'yan!' sigaw ng tatay, nanay, kuya, ate," },
    { time: 122700, text: "at mga pinsan ni Pagong, na nagbibigay ng lakas ng loob." },
    { time: 127000, text: "" },
    { time: 127100, text: "'Talo na 'yan! Talo na 'yan! Ang bagal-bagal!'" },
    { time: 130200, text: "sigaw naman ng mga kamag-anak ni Kuneho, na nagtatawanan." },
    { time: 134300, text: "" },
    { time: 134500, text: "Kahit inuutya, patuloy pa rin si Pagong. Buong tapang niyang tinuloy ang pag-akyat." },
    { time: 141000, text: "" },
    { time: 141200, text: "Malayo nang naabot ni Kuneho. Nagpahinga siya sandali para tingnan ang kalaban." },
    { time: 147500, text: "Walang nakikita, kaya't tumungo siya sa puno at natulog." },
    { time: 151800, text: "" },
    { time: 152200, text: "Kahit mabagal, patuloy ang pagsisikap ni Pagong hanggang sa makarating sa tuktok." },
    { time: 158200, text: "" },
    { time: 158500, text: "Nang magising si Kuneho, napansin niyang isang dipa na lang ang layo ni Pagong sa tuktok." },
    { time: 165000, text: "" },
    { time: 165300, text: "Nagmadali ang Kuneho upang subukang unahan si Pagong." },
    { time: 169200, text: "Ngunit huli na, dahil naabot na ni Pagong ang tuktok ng tagumpay." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Kuneho At Si Pagong</Text>
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


