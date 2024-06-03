import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";
type Style = {
  dayWarter: ViewStyle;
  fontSizeWrap: TextStyle;
  fontSizeWrap2: TextStyle;
  fontFolorWhite: TextStyle;
  weaterImg: ImageStyle;
};
import React, { useEffect, useState } from "react";
interface weatherType {
  mainWeather: string;
  weather: any[];
}

import weater from '@/assets/mock/dayWeather.json'
export default function DayWeaterLayout() {
  const [mainweather, setMainweather] = useState("");
  const [weatherList, setWeatherList] = useState({
    mainWeather: "",
    weather: [],
  } as weatherType);
  useEffect(() => {
    getMain();
    getWeather();
  }, []);
  const getMain = () => {
    fetch(
      "https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/F-C0032-017?Authorization=rdec-key-123-45678-011121314&format=JSON",
      {
        headers: {
          // 'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setMainweather(
          json.cwaopendata.dataset.parameterSet.parameter[0].parameterValue
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getWeather = () => {
    setWeatherList(weater);
  };
  return (
    <View
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#2e73b8",
        borderRadius: 15,
      }}
    >
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            borderBottomWidth: 2,
            borderBottomColor: "white",
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
          }}
        >
          {mainweather}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {weatherList.weather.map((item, i) => {
          return (
            <View style={styles.dayWarter} key={i}>
              <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
                {item.time}
              </Text>
              {item.status === "sun" ? (
                <Image
                  source={require("../../assets/images/sun.png")}
                  style={styles.weaterImg}
                ></Image>
              ) : item.status === "cloud" ? (
                <Image
                  source={require("../../assets/images/cloud.png")}
                  style={styles.weaterImg}
                ></Image>
              ) : (
                <Image
                  source={require("../../assets/images/mist.png")}
                  style={styles.weaterImg}
                ></Image>
              )}
              <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
                {item.temp}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  dayWarter: {
    display: "flex",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  fontSizeWrap: {
    fontSize: 20,
  },
  fontSizeWrap2: {
    fontSize: 18,
  },
  fontFolorWhite: {
    color: "white",
  },
  weaterImg: {
    width: 30,
    height: 30,
    marginBottom: 15,
    marginTop: 15,
  },
});
