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

  const audioFile = require('../../../assets/voiceover/ALAMATNGROSAS.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgRosas/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Noong unang panahon, sa isang nayon sa malayo," },
    { time: 4200, text: "may isang dalagang kilala bilang si Rosa dahil sa kanyang kakaibang ganda at mapupulang mga pisngi." },
    { time: 11000, text: "Dahil dito, maraming kalalakihan ang nagkakagusto kay Rosa." },
    { time: 15000, text: "" },
    { time: 15200, text: "Isang araw, dumalaw si Antonio sa bahay nina Rosa para humingi ng pahintulot na manligaw." },
    { time: 22000, text: "Pinayagan siya ng mga magulang ni Rosa, dahil siya ang unang lumapit sa kanilang pamilya." },
    { time: 27500, text: "Ngunit may kundisyon: kailangan niyang patunayan ang kanyang sarili kay Rosa at pasayahin ito." },
    { time: 34000, text: "" },
    { time: 34500, text: "Nagpakita si Antonio ng kabutihan sa pamamagitan ng paglilingkod" },
    { time: 38600, text: "sa pamilya ni Rosa at pag-aalaga sa kanila. Natuwa ang mga magulang ni Rosa," },
    { time: 44500, text: "at unti-unti ring nahulog ang loob ni Rosa kay Antonio." },
    { time: 47500, text: "" },
    { time: 48000, text: "Sa araw ng kanilang pag-aayos, nagtaka si Rosa nang hindi dumating si Antonio." },
    { time: 53000, text: "Doon niya natuklasan na niloloko lang pala siya nito," },
    { time: 57000, text: "narinig niya ito sa usapan ng binata at ang kanyang mga kaibigan." },
    { time: 61000, text: "Nasaktan si Rosa ng labis sa kanyang natuklasan." },
    { time: 64200, text: "" },
    { time: 64500, text: "Sa pag-uwi ni Rosa, hindi niya napigilang umiyak." },
    { time: 68000, text: "Hindi niya sinagot ang mga tanong ng kanyang mga magulang" },
    { time: 71200, text: "at naglaho na lang sa kanilang paningin." },
    { time: 73800, text: "" },
    { time: 74200, text: "Kinabukasan, nawala si Rosa at hindi na rin siya nagpakita sa mga sumunod na araw." },
    { time: 80000, text: "" },
    { time: 80500, text: "Isang araw, may kakaibang halaman na tumubo sa lugar" },
    { time: 84800, text: "kung saan dati nagtagpo sina Rosa at Antonio." },
    { time: 87800, text: "" },
    { time: 88200, text: "Tinawag itong rosas dahil sa pulang bulaklak na nagpapaalala sa mapupulang pisngi ni Rosa." },
    { time: 94500, text: "Ngunit may espesyal itong tinik na nagbibigay ng babala:" },
    { time: 98000, text: "sinasabi ng mga tao na si Rosa ang nagsasabing walang" },
    { time: 101800, text: "sinumang makakakuha ng bulaklak nang hindi nasasaktan." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Rosas</Text>
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


