// _layout.js
import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerShown: false,
            }}/>
        <Stack.Screen name="mainmenu/index" options={{
            headerTitle: "",
            title: "",
            headerTintColor: 'none',
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="difficultyscreen/index" options={{
            headerTitle: "",
            title: "",
            headerTintColor: 'none',
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="instructions/index" options={{
            headerTitle: "",
            title: "",
            headerTintColor: 'none',
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="aboutus/index" options={{
            headerTitle: "",
            title: "",
            headerTintColor: 'none',
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />


// easy window...
        <Stack.Screen name="easy/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgAso/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgAso/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />  
        <Stack.Screen name="easy/AlamatNgButiki/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgButiki/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgDurian/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgDurian/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgGagamba/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgGagamba/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgLansones/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgLansones/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgPilipinas/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgPilipinas/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgRosas/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlamatNgRosas/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AngDagaAtAngLeon/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AngDagaAtAngLeon/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AngKabayoAtAngKalabaw/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AngKabayoAtAngKalabaw/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/BakitLagingNagaawayAngAsoPusaAtDaga/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/BakitLagingNagaawayAngAsoPusaAtDaga/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlitaptapAtParuparo/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/AlitaptapAtParuparo/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/ParuparoAtLanggam/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="easy/ParuparoAtLanggam/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />


// medium window...
        <Stack.Screen name="medium/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgAmpalaya/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgAmpalaya/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgBahaghari/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgBahaghari/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgBayabas/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgBayabas/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgKasoy/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgKasoy/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgPinya/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/AlamatNgPinya/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/LoboAtKambing/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/LoboAtKambing/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/MagAnakNaLanggam/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/MagAnakNaLanggam/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/SiKambingAtKalabaw/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/SiKambingAtKalabaw/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/PagongAtKalabaw/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/PagongAtKalabaw/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/KunehoAtPagong/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="medium/KunehoAtPagong/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />


// hard window...
        <Stack.Screen name="hard/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgMangga/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgMangga/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgParuParo/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgParuParo/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgSaging/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgSaging/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgSampaguita/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgSampaguita/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgWalingWaling/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AlamatNgWalingWaling/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AsoAtIpis/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/AsoAtIpis/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/BakitDalaDalaNiPagongAngKanyangBahay/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/BakitDalaDalaNiPagongAngKanyangBahay/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/BulkangMayon/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/BulkangMayon/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/InahingManokAtSisiw/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/InahingManokAtSisiw/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/LanggamAtSiTipaklong/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/LanggamAtSiTipaklong/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/MariaMakiling/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/MariaMakiling/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/PagongAtMatsing/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
        <Stack.Screen name="hard/PagongAtMatsing/GameScreen/index" options={{
            headerTitle: "",
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
        }} />
    </Stack>
  );
}
