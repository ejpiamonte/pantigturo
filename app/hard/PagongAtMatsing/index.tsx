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

  const audioFile = require('../../../assets/voiceover/PAGONGATMATSING.mp3');  // Example local audio file
  const navigationTarget = '/hard/PagongAtMatsing/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Si Pagong at si Matsing ay magkaibigan nang lubusan. Si Pagong ay maalalahanin at matulungin, samantalang si Matsing naman ay mautak at mapaglaro." },
    { time: 12000, text: "Isang araw, ibinigay sa kanila ni Aling Muning ang isang supot ng pansit." },
    { time: 17300, text: "Halika, Matsing, at tayo'y kumain ng pansit, sabi ni Pagong, nag-aanyaya." },
    { time: 22000, text: "" },
    { time: 22200, text: "'Naku, baka ito'y panis na,' sabi ni Matsing." },
    { time: 26000, text: "" },
    { time: 26200, text: "'Mas mabuti nga, hayaan mo muna akong subukan ito para masiguro natin na ligtas itong kainin', dagdag pa ni Pagong." },
    { time: 33800, text: "" },
    { time: 34000, text: "'Hindi ko pa rin gusto, baka masama ang kalooban nito. At, ako ang kakain muna,' matigas na sagot ni Matsing." },
    { time: 41000, text: "" },
    { time: 41300, text: "Wala nang magagawa si Pagong kundi pumayag sa matigas na kalooban ng kaibigan. Inubos ni Matsing ang pansit at walang natira para kay Pagong." },
    { time: 50000, text: "" },
    { time: 50300, text: "'Pasensya ka na, kaibigan, napasarap kasi ang pansit kaya wala nang natira. Sa susunod ka na lang', paliwanag ni Matsing." },
    { time: 57800, text: "" },
    { time: 58000, text: "Dahil mabait at mapagbigay si Pagong, hindi na lamang siya nagreklamo sa kanyang kaibigan." },
    { time: 63500, text: "" },
    { time: 63800, text: "Sa kanilang paglalakbay sa kagubatan, napansin ni Pagong ang isang puno ng saging." },
    { time: 69300, text: "" },
    { time: 69500, text: "'Matsing! Matsing! Tingnan mo ang puno ng saging na ito. Maganda ang paglaki nito." },
    { time: 75000, text: "Gusto kong itanim ito sa aking bakuran para sa ating pagkain, sabi ni Pagong nang may kasiyahan.'" },
    { time: 81000, text: "" },
    { time: 81200, text: "'Gusto ko rin ng saging na 'yan, ibigay mo na lang sa akin', abi ni Matsing." },
    { time: 85800, text: "" },
    { time: 86000, text: "'Paumanhin, gusto ko rin ito. Kung nais mo, maghati na lang tayo', tugon ni Pagong." },
    { time: 92000, text: "" },
    { time: 92200, text: "'Maaari, ngunit ang taas ay sa akin, kasama ang mga dahon', agot na may ngiti ni Matsing." },
    { time: 98500, text: "" },
    { time: 98700, text: "'At ang baba ay sa akin?' tanong ni Pagong." },
    { time: 101600, text: "" },
    { time: 101800, text: "'Ganoon nga, wala akong panahon para mag-aksaya ng oras sa pagtubo ng dahon, kaya't sa akin na lang ang itaas', sabi ni Matsing." },
    { time: 109700, text: "" },
    { time: 109800, text: "Nalungkot si Pagong nang mag-isa niyang inuuwi ang kalahati ng saging na may ugat." },
    { time: 115000, text: "Samantala, masaya si Matsing na maydala ang mas maraming dahon ng puno." },
    { time: 120000, text: "" },
    { time: 120200, text: "Inalagaan ni Pagong ang kanyang halaman. Araw-araw, sinilipan niya ito at pinatutubuan ng pataba ang lupa." },
    { time: 128200, text: "Ganito rin ang ginawa ni Matsing. Ngunit, pagkalipas ng isang linggo, namatay ang tanim ni Matsing." },
    { time: 135200, text: "" },
    { time: 135400, text: "Nakita ni Pagong ang pagbubunga ng saging sa kanyang puno at siya'y natuwa." },
    { time: 140000, text: "Mas lalo niyang inalagaan ang tanim hanggang ito'y magbunga nang sagana." },
    { time: 144800, text: "" },
    { time: 145000, text: "Naiinggit si Matsing nang makita ang saganang bunga sa puno ni Pagong." },
    { time: 149400, text: "" },
    { time: 149600, text: "'Wow, nagbunga ang iyong tanim. Paano mo nagawa iyon? Ang akin ay namatay at natuyo', sabi ni Matsing." },
    { time: 157200, text: "" },
    { time: 157400, text: "'Tinaga ko ito nang maayos. Sinabi ni Mang Islaw Kalabaw na may pag-asa pa ang bahagi ng halaman kung mayroon itong ugat', paliwanag ni Pagong." },
    { time: 166500, text: "" },
    { time: 166700, text: "'Kaya pala namatay ang aking tanim', sabi ni Matsing nang may panghihinayang." },
    { time: 171300, text: "" },
    { time: 171500, text: "'Mukhang handa na ang mga bunga nito. Halika, kunin natin', anyaya niya." },
    { time: 176000, text: "" },
    { time: 176200, text: "'Gusto ko sana, ngunit ang mga bunga ay masyadong mataas para sa akin. Hindi ko kayang umakyat', sabi ni Pagong." },
    { time: 184100, text: "" },
    { time: 184200, text: "'Kung gusto mo, ako na lang ang aakyat, at ipamimigay ko sa iyo ang mga bunga." },
    { time: 189000, text: "Pero bigyan mo lang ako ng konti para sa aking miryenda', sabi ni Matsing." },
    { time: 194000, text: "" },
    { time: 194200, text: "Pumayag si Pagong sa alok ni Matsing. Ngunit nang umakyat na si Matsing, kinain niya ang lahat ng bunga." },
    { time: 201000, text: "Wala siyang itinira para kay Pagong." },
    { time: 203000, text: "" },
    { time: 203200, text: "'Sa akin na ang lahat nito, Pagong. Gutom na gutom na ako. Hindi pa ito sapat para sa akin. Hahaha!'" },
    { time: 209800, text: "sabi ni Matsing nang may kasiyahan." },
    { time: 211800, text: "" },
    { time: 212000, text: "Naiwan si Pagong na labis na nadismaya sa ginawang ito ni Matsing." },
    { time: 216000, text: "Habang ito'y natutulog, naglagay si Pagong ng mga tinik sa ilalim ng puno." },
    { time: 221000, text: "Nang magising si Matsing, nakita niya ang mga tinik at humingi siya ng tulong kay Pagong." },
    { time: 226400, text: "" },
    { time: 226600, text: "'Pagong, tulungan mo ako! Alisin mo ang mga tinik na ito. Malapit nang dumilim at mukhang uulan ng malakas', pakiusap ni Matsing." },
    { time: 233700, text: "" },
    { time: 233900, text: "'Ayoko! Napaka-salbahe mo. Lagi mo na lang akong iniisahan! Aalis muna ako. Mukhang malakas ang ulan." },
    { time: 241000, text: "Sa bahay ni Aling Muning muna ako habang umuulan', sabi ni Pagong sabay alis." },
    { time: 246000, text: "" },
    { time: 246500, text: "Makalipas ang ilang sandali, nagsimulang bumuhos ang malakas na ulan. Walang magagawa si Matsing kundi bumaba sa puno ng saging." },
    { time: 255000, text: "" },
    { time: 255200, text: "'Nangangatog ako sa lamig! Masakit ang mga tinik!' reklamo ni Matsing." },
    { time: 260000, text: "" },
    { time: 260000, text: "'Maghanda ka bukas, Pagong. Maghihiganti ako sa ginawa mo sa akin', bulong ni Matsing sa kanyang sarili." },
    { time: 266000, text: "" },
    { time: 266200, text: "Kinabukasan, mahapdi pa rin ang mga sugat ni Matsing, ngunit hinanap pa rin niya si Pagong." },
    { time: 272600, text: "Makita man lang ito at sabihin niya ang kanyang hinaing." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Pagong At Si Matsing</Text>
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


