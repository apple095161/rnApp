import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  useColorScheme,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import Icons from "react-native-vector-icons/FontAwesome";
import zipData from '../../assets/mock/twZipCode.json';
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetTextInput
} from "@gorhom/bottom-sheet";
import Home from "@/components/weater/home";
export default function HomeScreen() {
  const [showBottom, setShowBottom] = useState<boolean>(false);
  const [bottom, setBottom] = useState<string[]>(["1%", "1%"]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [serachitem, setSearchitem] = useState<any[]>([])
  const [text, onChangeText] = useState<string>('');
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const onClick = () => {
    console.log(showBottom);
    if (!showBottom) {
      setBottom(["20%", "30%"]);
      setShowBottom(true);
      return;
    }
    setBottom(["1%", "1%"]);
    setShowBottom(false);
  };
  useEffect(() => {
    const item = zipData.cities.filter(item => item.name === '高雄市')[0].region
    setSearchitem(item)
  }, []);
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", position: "relative" }}
    >
      <ImageBackground
        source={require("../../assets/images/wind.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%", maxWidth: 767 }}
      >
        <Home showitem={onClick}></Home>
      </ImageBackground>
      <BottomSheetModalProvider>
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={bottom}
          index={1}
        >
          <BottomSheetView >
            <View style={styles.serchArea}>
              <ScrollView showsHorizontalScrollIndicator={false}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeText}
                  value={text}
                />
                <BottomSheetTextInput value="" ></BottomSheetTextInput>
                {
                  serachitem.map(city => {
                    return (<TouchableOpacity
                      style={styles.touchable}
                      onPress={() => { }}
                      activeOpacity={0.8}>
                      <Text>{city.name}</Text>
                    </TouchableOpacity>)
                  })
                }
              </ScrollView>
            </View>
          </BottomSheetView>

        </BottomSheet>
      </BottomSheetModalProvider>
    </View>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 15,
  },
  searchText: {
    fontSize: 24,
    color: "white",
    marginRight: 5,
  },
  searchInput: {},
  circleWrap: {
    width: "100%",
    height: 400,
    marginTop: 15,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  circleLayout: {
    backgroundColor: "rgb(179, 179, 186)",
    alignContent: "center",
    justifyContent: "center",
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    opacity: 0.5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  serchArea: {
    height: "100%",
    padding: 10
  },
  touchable: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10
  },
  textInput: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
});
