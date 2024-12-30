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

  const audioFile = require('../../../assets/voiceover/ALAMATNGDURIAN.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgDurian/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Sa isang bayan sa Mindanao, may isang matandang babae" },
    { time: 4200, text: "na kilala sa tawag na Tandang During. Nakatira siya sa paanan ng bundok," },
    { time: 9000, text: "sa isang maliit na kubo na napaligiran ng malawak na bakuran na puno ng mga halaman." },
    { time: 14200, text: "" },
    { time: 14400, text: "Kilalang-kilala si Tandang During sa komunidad" },
    { time: 17000, text: "bilang isang matandang may likas na kapangyarihan, at marami ang natakot sa kanya." },
    { time: 22500, text: "Marami ang naniniwala na siya ay isang mangkukulam, kaya't iniiwasan siya ng mga tao." },
    { time: 28000, text: "" },
    { time: 28300, text: "Matagal nang nag-iisa si Tandang During simula nang pumanaw" },
    { time: 32000, text: "ang kanyang asawa at mga anak. Hindi na siya lumalabas ng kanyang" },
    { time: 35800, text: "tahanan at mas pinili niyang mag-ukay ng mga halaman." },
    { time: 39000, text: "Dahil sa kanyang matandang edad at sunud-sunuran na pag-uugali," },
    { time: 43300, text: "nagkaroon siya ng reputasyon bilang isang masungit na tao." },
    { time: 46500, text: "" },
    { time: 47000, text: "Sa paglipas ng panahon, lalo pang lumayo sa kanya ang mga tao sa kanilang komunidad." },
    { time: 52200, text: "Maging ang mga bata na dati ay makulit," },
    { time: 55000, text: "ay unti-unti nang nawala ang kanilang pagtatakot sa matanda." },
    { time: 58300, text: "" },
    { time: 58800, text: "Isang gabi, biglang dumating ang hanging amihan na dala ang kakaibang amoy sa komunidad." },
    { time: 64800, text: "Hindi nila alam kung saan galing ang amoy na iyon at ano ang dahilan nito." },
    { time: 69300, text: "Patuloy na lumakas ang amoy, kaya't nagpasya ang mga tao na hanapin ang pinagmulan nito." },
    { time: 74800, text: "" },
    { time: 75000, text: "Nang puntahan nila ang kubo ni Tandang During, hindi nila ito nakita roon." },
    { time: 79800, text: "Sa halip, napansin nila ang isang puno na may mga bunga" },
    { time: 84300, text: "na may matitigas na balat at matatalim na tinik." },
    { time: 87000, text: "Dahil sa sobrang hinog nagbubuka na ang mga prutas, Isang lalaki ang umakyat" },
    { time: 92500, text: "sa puno upang kunin ang mga bunga.  Bagaman may amoy ang mga ito," },
    { time: 97000, text: "hindi pa rin napigilan ng mga tao na subukan ang lasa ng mga prutas na iyon." },
    { time: 100600, text: "" },
    { time: 100800, text: "Nang mabalitaan ng iba sa komunidad ang kanilang paglilibot at pagtatangkang" },
    { time: 105300, text: "kuhanan ng bunga, nagtaka sila at napag-alaman" },
    { time: 108800, text: "na ito pala ay mga prutas mula sa taniman ni Tandang During." },
    { time: 112000, text: "Dahil sa hindi pagkakaunawaan sa pangalan ng prutas," },
    { time: 115200, text: "inakala ng mga tao na ang tawag dito ay 'during yan.'" },
    { time: 119000, text: "Sa paglipas ng panahon, ito ay naging 'durian' ang tawag sa prutas na iyon." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Durian</Text>
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


