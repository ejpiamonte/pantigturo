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

  const audioFile = require('../../../assets/voiceover/ALAMATNGMANGGA.mp3');  // Example local audio file
  const navigationTarget = '/hard/AlamatNgMangga/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 600, text: "Noong mga unang panahon, may mag-anak na naninirahan sa isang maliit na bayan sa Zambales." },
    { time: 6500, text: "Bagaman masisipag ang mag-asawa, ang kanilang tatlong anak na mga binatilyo ay lubhang tamad." },
    { time: 13000, text: "" },
    { time: 13200, text: "Hinayaan nilang ang kanilang mga matatanda na magsaka upang mayroon silang pagkain." },
    { time: 19000, text: "Binigyan ng babala ng mag-asawa ang kanilang mga anak na dapat silang tumulong" },
    { time: 23700, text: "sa pag-aalaga ng lupa ngunit hindi ito sinunod ng mga ito." },
    { time: 28000, text: "Minsan, sila pa ay nag-aaway-away kung sino ang dapat na magtatrabaho sa sakahan." },
    { time: 33000, text: "" },
    { time: 33700, text: "'Ano kaya ang mangyayari sa ating mga anak kapag wala na tayo?' nag-aalalang tanong ni Mang Pangga kay Aling Manggita." },
    { time: 41000, text: "" },
    { time: 41200, text: "'Kailangan matuto ang ating mga anak,' sagot ni Aling Manggita." },
    { time: 45000, text: "Isang araw, kinausap ng mag-asawa ang kanilang tatlong anak." },
    { time: 49500, text: "" },
    { time: 49700, text: "'Mga anak, ang lupain natin ay mayaman sa ginto. Ngunit," },
    { time: 54000, text: "kailangan ninyong paghirapan ito upang makuha ang ginto,' sabi ni Mang Pangga." },
    { time: 59000, text: "" },
    { time: 59200, text: "'Kailangan niyong matutunan ang paggawa, mga anak. Matanda na kami at ayaw naming magutom kayo kung wala na kami,' dagdag ni Aling Manggita." },
    { time: 68000, text: "" },
    { time: 68200, text: "Ngunit hindi nagbago ang mga anak nila. Isang umaga, nagising silang walang makain sa kusina." },
    { time: 76000, text: "'Inay, Itay, bakit wala kaming almusal?' sigaw nila ngunit walang sumasagot." },
    { time: 82000, text: "" },
    { time: 82200, text: "Naghanap sila ngunit hindi nila matagpuan ang kanilang magulang." },
    { time: 86000, text: "Dahil sa gutom at pagod, napilitan silang maghanap ng makakain." },
    { time: 91000, text: "Hindi sila sanay sa paggawa kaya't labis na nahirapan ang tatlo." },
    { time: 95000, text: "Doon naalala nila ang sinabi ng kanilang mga magulang." },
    { time: 99000, text: "" },
    { time: 99200, text: "'Sinabi ni Itay na may ginto sa ating bakuran, ngunit saan natin ito makikita?' tanong ng panganay na si Biboy." },
    { time: 106000, text: "" },
    { time: 106200, text: "Araw-araw, nilibot ng magkakapatid ang bakuran. Hinanap nila ang gintong sinasabi ng kanilang ama." },
    { time: 113300, text: "Hanggang isang araw, nakita nila ang dalawang kakaibang halamang tumubo sa kanilang bakuran." },
    { time: 119200, text: "Noon lang sila nakakita ng ganoong uri ng halaman." },
    { time: 122200, text: "" },
    { time: 123000, text: "Inalagaan ng magkakapatid ang dalawang halaman." },
    { time: 126000, text: "Nararamdaman nila na may kaugnayan ang mga halamang ito sa kanilang nawawalang magulang." },
    { time: 132000, text: "Naging mas masisipag na rin ang magkakapatid at natutong magtrabaho." },
    { time: 136000, text: "Kung hindi sila kikilos, hindi sila makakakain." },
    { time: 140000, text: "" },
    { time: 140300, text: "Isang araw, napansin ng magkakapatid na namumunga na ang dalawang puno." },
    { time: 145500, text: "Isang umaga, napansin nilang ang mga berdeng bunga ay nagiging kulay-ginto." },
    { time: 151500, text: "Pumitas ng isa si Biboy at tinikman ito." },
    { time: 154800, text: "" },
    { time: 155000, text: "'Wow! Ito na yata ang pinakamasarap na prutas na natikman ko,' sabi niya ng may kasiglahan." },
    { time: 161200, text: "" },
    { time: 161500, text: "'Ito ang gintong sinasabi nina Itay at Inay! Makakatulong sa atin ang mga punong ito ngunit kailangan munang mamunga " },
    { time: 169000, text: "at paghirapan bago maani ang matamis, mabango, kulay ginto, at hugis-pusong bunga,' sabi ni Biboy." },
    { time: 177200, text: "" },
    { time: 177600, text: "'Mahal na mahal talaga tayo nina Inay at Itay." },
    { time: 180500, text: "Kahit wala na sila ay nag-iwan sila ng alaala ng malilinis at mabubuting puso nila." },
    { time: 186000, text: "Kaya siguro matatamis ang mga prutas na ito,' dagdag pa niya." },
    { time: 190000, text: "" },
    { time: 190200, text: "Nakilala ng lahat ang masarap na prutas na tinawag nilang mangga mula sa pinagsamang pangalan nina Aling Manggita at Mang Pangga," },
    { time: 198500, text: "ang mabubuting mag-asawang nagsakripisyo para sa kanilang mga anak at para sa lahat ng taong hanggang ngayon" },
    { time: 205000, text: "ay patuloy na nakakain ng masarap na bunga ng mangga." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Mangga</Text>
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


