import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import useLoadFonts from '../StoryFunctions/Fonts';
import AudioPlayer from '../StoryFunctions/Audio';

export default function App() {

  const { width, height } = Dimensions.get('window');

interface Lyric {
  time: number;
  text: string;
}

  const audioFile = require('../../../assets/voiceover/ALAMATNGGAGAMBA.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgGagamba/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 300, text: "Noong unang panahon," },
    { time: 1800, text: "may mag-asawa na ang hanapbuhay ay paghahabi ng mga tela." },
    { time: 5800, text: "Ang kanilang nag-iisang anak na babae ay tinawag nilang Amba." },
    { time: 11000, text: "Itinuro sa kanya ng mga magulang ang sining ng paghahabi," },
    { time: 15000, text: "at sa murang edad ay naging bihasa na siya rito." },
    { time: 17800, text: "" },
    { time: 18000, text: "Dahil sa kanyang kahusayan," },
    { time: 20000, text: "naging tanyag si Amba at maraming tao ang humanga sa kanyang galing." },
    { time: 24500, text: "Ngunit sa kabila ng tagumpay, naging mayabang si Amba at hinamon" },
    { time: 29200, text: "na sino man sa kanilang mga magulang na magpatalo sa kanya sa paghahabi." },
    { time: 34000, text: "" },
    { time: 34200, text: "Maraming maghahabi ang tumanggap sa hamon ni Amba," },
    { time: 38000, text: "ngunit walang sinuman ang nakapantay sa kanyang galing." },
    { time: 41000, text: "Dahil dito, lalo pang lumaki ang kanyang kayabangan." },
    { time: 45000, text: "" },
    { time: 45200, text: "Narinig ng mga diyosa ang kayabangan ni Amba at nagpasya silang turuan siya ng leksyon." },
    { time: 51000, text: "Isang araw, isang matanda ang nagpakilala at hinamon" },
    { time: 55200, text: "si Amba sa paligsahan sa paghahabi. Sa kabila ng pagtawanan ni Amba," },
    { time: 60500, text: "pumayag siyang makipagtagisan sa matanda." },
    { time: 64000, text: "" },
    { time: 64200, text: "Sa paligsahan, ipinakita ng matanda ang kanyang galing sa paghahabi" },
    { time: 69000, text: "at nagtanghal ng napakagandang tela." },
    { time: 71500, text: "Natulala si Amba at napahiya sa galing ng matanda." },
    { time: 76000, text: "Sa kabila ng pagtanggi ni Amba," },
    { time: 78200, text: "itinanghal ng mga tao ang tela ng matanda bilang panalo." },
    { time: 83000, text: "" },
    { time: 83200, text: "Nagalit si Amba at inakusahan ang matanda ng pandaraya." },
    { time: 87000, text: "Subalit biglang nagbago ang anyo ng matanda" },
    { time: 90000, text: "at lumitaw ang tunay na pagkakakilanlan bilang isang diyosa." },
    { time: 94000, text: "" },
    { time: 94200, text: "Hindi natuwa ang diyosa sa kayabangan ni Amba at pinarusahan siya." },
    { time: 99000, text: "Binago ang anyo ni Amba at ginawang isang gagamba." },
    { time: 103000, text: "Ito ang simula kung bakit ang gagamba" },
    { time: 105800, text: "ay kilala sa kahusayan sa paghahabi ng kanilang mga bahay." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Gagamba</Text>
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


