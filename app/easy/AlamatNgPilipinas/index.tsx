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

  const audioFile = require('../../../assets/voiceover/ALAMATNGPILIPINAS.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgPilipinas/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 300, text: "Noong unang panahon, bago pa maging bansa ang Pilipinas," },
    { time: 4000, text: "ang mga pulo nito ay hindi pa binubuo ng isang bansa." },
    { time: 8200, text: "Sa halip, ang mga ito ay bahagi lamang ng maliliit na mga pulo." },
    { time: 13000, text: "Sa isa sa mga pulong ito, may nakatirang isang higante" },
    { time: 17200, text: "na may kweba sa kalagitnaan ng Dagat Pasipiko." },
    { time: 20000, text: "Kasama niya sa kanyang tahanan ang kanyang tatlong anak na babae: sina Minda, Lus, at Bisaya." },
    { time: 27000, text: "" },
    { time: 27200, text: "Isang araw, kinailangan ng ama higante na umalis upang mangaso sa kalapit na pulo." },
    { time: 33000, text: "Dahil dito, kailangan niyang iwan ang kanyang tatlong anak sa kanilang kweba." },
    { time: 38000, text: "Ngunit bago siya umalis, ipinag-utos niya sa kanilang" },
    { time: 42000, text: "huwag lumabas ng kweba at hintayin siya roon." },
    { time: 45000, text: "" },
    { time: 45200, text: "Ngunit hindi sumunod si Minda, ang pinakamatandang anak," },
    { time: 49500, text: "sa utos ng kanilang ama. Lumabas siya ng kweba at namasyal sa tabi ng dagat." },
    { time: 55500, text: "Hindi niya napansin na malayo na pala siya at hindi na niya makita ang kweba." },
    { time: 60000, text: "Sa kanyang paglalakad, bigla siyang lamunin ng malaking alon at siya ay nalunod." },
    { time: 66000, text: "" },
    { time: 66500, text: "Nang marinig ng kanyang mga kapatid ang sigaw ni Minda," },
    { time: 70000, text: "agad silang tumakbo papunta sa dagat. Ngunit dahil hindi marunong lumangoy si Minda," },
    { time: 75000, text: "nagtulungan silang tatlo sa pagtulak sa kanya pataas." },
    { time: 79000, text: "Ngunit sa kabila ng kanilang pagsisikap, hindi nila napigilan ang pagkawala ni Minda." },
    { time: 84800, text: "" },
    { time: 85000, text: "Nang magbalik ang ama higante, nagtaka siya sa kawalan ng kanyang mga anak." },
    { time: 91200, text: "Matapos siyang hanapin sa paligid, natuklasan niyang ang tatlong anak ay nalunod sa dagat." },
    { time: 98000, text: "Sa sobrang kalungkutan at pighati," },
    { time: 101000, text: "ang higante ay napahiga sa isang bato at doon tuluyang natulog." },
    { time: 106000, text: "" },
    { time: 106500, text: "Nang magising ang higante, napansin niya ang tatlong pulo na hindi noon ay naroon." },
    { time: 112500, text: "Napagtanto niya na ang mga ito ang kanyang mga anak na nalunod sa dagat." },
    { time: 117500, text: "Kaya mula noon, tinawag niya ang mga pulong ito bilang Luson, Bisaya, at Mindanaw." },
    { time: 126000, text: "Mula sa pangalan ng kanyang mga anak." },
    { time: 129000, text: "At dito nagmula ang bansang Pilipinas, na matatagpuan sa katimugang bahagi ng Asya." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Pilipinas</Text>
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


