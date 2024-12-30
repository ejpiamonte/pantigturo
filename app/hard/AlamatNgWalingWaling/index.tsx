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

  const audioFile = require('../../../assets/voiceover/ALAMATNGWALINGWALING.mp3');  // Example local audio file
  const navigationTarget = '/hard/AlamatNgWalingWaling/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 300, text: "Sa baybayin ng ilog Daba-daba, malapit sa paanan ng Bundok ng Apo," },
    { time: 4800, text: "matatagpuan ang nayon ng Dayaw, na pinamumunuan ni Raha Musukul." },
    { time: 10000, text: "Kasama niya sa kanyang balangay si Rani Waling," },
    { time: 13000, text: "ang maganda at mabait niyang asawa na nagbibigay ng kaligayahan at kariktan sa kanilang tahanan." },
    { time: 19200, text: "" },
    { time: 19500, text: "Isang hapon, isang tauhan ng balangay ang dumating sa nagmamadaling balita." },
    { time: 25200, text: "Ibinabalita nito ang kamatayan ni Datu Ambungan, kapatid ni Raha Musukul," },
    { time: 30700, text: "sa kamay ng isa sa tribo ni Raha Makalisang." },
    { time: 34000, text: "Ang balitang ito ay nagpabukas ng galit at pagnanais ng paghihiganti sa puso ni Raha Musukul." },
    { time: 40500, text: "" },
    { time: 40700, text: "Subalit hindi sang-ayon si Datu Kinadmanon, ang tagapayo ni Raha, sa plano ng pagsalakay." },
    { time: 48000, text: "" },
    { time: 48200, text: "'Hindi magiging ligtas para sa iyo, Raha. Hindi tayo handa at delikado ang buhay mo,' sabi ni Datu Kinadmanon." },
    { time: 55500, text: "" },
    { time: 55700, text: "'Hindi ko iniisip ang aking buhay. Ang mahalaga ay ang katarungan para kay Ambungan,' ang mariing tugon ni Raha Musukul." },
    { time: 63000, text: "" },
    { time: 63200, text: "Ngunit ang kanyang asawa, si Rani Waling, ay nag-alala para sa kanyang kaligtasan." },
    { time: 69000, text: "" },
    { time: 69200, text: "'Mahal, hindi ko matitiis na ikaw ay ilagay sa panganib,' ang paalala ni Rani." },
    { time: 74300, text: "" },
    { time: 74500, text: "'Kailangan kong gawin ito para sa kapatid ko. Sana ay maintindihan mo,' ang matamlay na sagot ni Raha." },
    { time: 81000, text: "" },
    { time: 81200, text: "Ngunit ang pagmamahal ni Rani Waling ay nagdala sa kanya ng matinding pangamba." },
    { time: 86000, text: "" },
    { time: 86200, text: "'Raha Makalisang ay kilala sa kanyang karahasang pumatay ng sinumang dumaraan sa kanyang teritoryo." },
    { time: 92000, text: "Hindi mo alam kung ano ang maaaring mangyari,' pagmamakaawa ni Rani Waling." },
    { time: 96800, text: "" },
    { time: 97000, text: "'Alam ko ang panganib, ngunit hindi ko ito maaaring balewalain. Maghintay ka lamang dito, at babalik ako,'" },
    { time: 104400, text: "Ang pangako ni Raha Musukul." },
    { time: 107000, text: "" },
    { time: 107200, text: "Sa kabila ng pangamba, pumayag si Rani Waling at nagdasal ng kasama ng kanyang sinta." },
    { time: 113500, text: "" },
    { time: 113700, text: "Ngunit kahit matagal na ang lumipas, hindi pa rin nagbalik si Raha Musukul mula sa laban." },
    { time: 119800, text: "Sa kabila ng pag-aalala, hindi nagpaubaya si Rani Waling sa kanyang asawa." },
    { time: 124500, text: "" },
    { time: 124800, text: "Ngunit habang wala ang Raha, lumakas ang ulan at bumuhos ang malakas na bagyo." },
    { time: 130400, text: "Sa kabila ng unos, hindi nawalan ng pag-asa si Rani Waling at nagsalita sa kalangitan." },
    { time: 137000, text: "" },
    { time: 137200, text: "'Mahal na Bathala, ibalik mo sa akin ang aking minamahal. Hinihiling ko ang kanyang kaligtasan." },
    { time: 143500, text: "Hindi ako titigil hanggang sa makita ko siya,' ang kanyang panalangin." },
    { time: 148000, text: "" },
    { time: 148200, text: "Ang kanyang pagtangis ay napagtuunan ng kalangitan, at sa gitna ng unos, tila may isang sagot." },
    { time: 155000, text: "" },
    { time: 155200, text: "Sa kabila ng pagsubok, hindi nawalan ng pag-asa si Rani Waling. Nagdesisyon siyang hanapin ang Raha, kahit anong mangyari." },
    { time: 163500, text: "" },
    { time: 163700, text: "Sa kanyang paglalakbay, natagpuan niya ang Waling-Waling, isang kakaibang bulaklak na nagpapahiwatig ng pag-asa at pagmamahal." },
    { time: 172500, text: "Ito ay itinuring na sagisag ng paghihintay ni Rani sa kanyang minamahal." },
    { time: 177500, text: "" },
    { time: 177700, text: "Sa kabila ng pagsubok at pagdadalamhati, nananatili ang alaala ni Rani Waling," },
    { time: 183200, text: "na hanggang sa ngayon ay hindi pa rin nawawala ang pag-asa sa pagbabalik ng kanyang sinta." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Waling-Waling</Text>
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


