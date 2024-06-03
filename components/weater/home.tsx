import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextStyle
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import DayWeaterLayout from "../../components/weater/dayWeater";
import WeekWeather from "./weekWeather";
import AirComponent from "./AirComponent";
import * as Location from "expo-location";
export default function Home() {
  const [text, onChangeText] = useState("");
  const [location, setLocation] = useState([1, 2, 3, 4]);
  const [status, setStatus] = useState([
    {
      status: "sun",
      descript: "風速27",
      icon: "sun-o",
    },
    {
      status: "moon",
      descript: "太陽",
      icon: "moon-o",
    },
    {
      status: "umbrella",
      descript: "下雨",
      icon: "umbrella",
    },
  ]);
  const [showSearch, setShowSearch] = useState(false);
  const onPress = () => {
    setShowSearch(!showSearch);
  };
  const clickEmit = (i: any) => { };
  useEffect(() => {
    handlePress();
    getLocation();
  });
  const getLocation = async () => {
    try {
      let status = await Location.requestForegroundPermissionsAsync();
      let { coords } = await Location.getCurrentPositionAsync();
      const myPosition = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${22.6542609},${coords.longitude
        }&key=AIzaSyBuqwu7n7hZr3xMpZjw7IjkDltplqyANYk`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(coords);

      // if (status !== "granted") {
      //   setLocationError("Location permission denied");
      //   return;
      // }
      // let location = await Location.getCurrentPositionAsync({});
      // fetchWeatherData(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  };
  const handlePress = () => {
    fetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=rdec-key-123-45678-011121314",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const filterData = json.records.locations[0].location
          .filter((item: any) => item.locationName === "燕巢區")[0]
          .weatherElement.filter((item: any) => item.elementName === "Wx");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.viewWrap}>
      <SafeAreaView style={styles.safeWrap}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#c0c9dd" }}>
              高雄市,
              <Text style={{ color: "#c0c9dd" }}>前鎮區</Text>
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 48,
                color: "white",
              }}
            >
              23&#176;
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "bold",
                color: "#c0c9dd",
              }}
            >
              多雲時晴
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>最高34&#176;</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>最低24&#176;</Text>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 10, }}>
            <View style={styles.showDetail}>
              <View style={styles.showDetailinner}>
                <Text style={styles.textLayout}>11.0 km/h</Text>
                <Icon
                  name="wind"
                  size={30}
                  color="white"
                />
                <Text style={styles.textLayout}>西南風</Text>
              </View>
            </View>
            <View style={[styles.showDetail, { flexBasis: '40%' }]}>
              <View style={styles.showDetailinner}>
                <Text style={styles.textLayout}>1000</Text>
                <Icons
                  name="car-brake-low-pressure"
                  size={30}
                  color="white"
                />
                <Text style={styles.textLayout}>氣壓</Text>
              </View>
            </View>
            <View style={styles.showDetail}>
              <View style={styles.showDetailinner}>
                <Text style={styles.textLayout}>49%</Text>
                <Icon
                  name="cloud-showers-heavy"
                  size={30}
                  color="white"
                />
                <Text style={styles.textLayout}>濕度</Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 10, opacity: 0.8 }}>
            <DayWeaterLayout></DayWeaterLayout>
          </View>
          <View>
            <WeekWeather></WeekWeather>
          </View>
          <View>
            <AirComponent></AirComponent>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  viewWrap: {
    height: '100%',
    width: '100%',
    paddingBottom: 15,
    paddingTop: 20
  },
  safeWrap: {
    flex: 1,
    paddingTop: 30
  },
  searchWrap: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(236, 245, 255, 1)",
    borderRadius: 15,
    marginTop: 10,
    top: 60,
  },
  inputWrap: {
    position: "relative",
    flexDirection: "row",
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 0,
  },
  dailyWarter: {
    display: "flex",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "auto",
    backgroundColor: "rgba(236, 245, 255, 0.5)",
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  showDetail: {
    flexBasis: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 120,
    marginTop: 15
  },
  showDetailinner: {
    borderRadius: 10,
    backgroundColor: 'rgba(236, 245, 255, 0.5)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textLayout: {
    fontSize: 16,
    color: 'white'
  }
});
