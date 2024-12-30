import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    'CabinetGrotesk-Extrabold': require('../../../Fonts/CabinetGrotesk-Extrabold.ttf'),
    'Erode-Semibold': require('../../../Fonts/Erode-Semibold.ttf'),
    'Erode-SemiboldItalic': require('../../../Fonts/Erode-SemiboldItalic.ttf'),
    'Gambarino-Regular': require('../../../Fonts/Gambarino-Regular.ttf'),
    'Inika-Bold': require('../../../Fonts/Inika-Bold.ttf'),
    'Inika-Regular': require('../../../Fonts/Inika-Regular.ttf'),
    'IrishGrover-Regular': require('../../../Fonts/IrishGrover-Regular.ttf'),
    'Satoshi-Medium': require('../../../Fonts/Satoshi-Medium.ttf'),
    'Synonym-Regular': require('../../../Fonts/Synonym-Regular.ttf'),
  });
  
  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen().catch((error) =>
      console.error('Failed to hide splash screen:', error)
    );
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch((error) =>
      console.error('Failed to prevent auto hide splash screen:', error)
    );
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded and splash screen is hidden
  }

  return fontsLoaded;
}
