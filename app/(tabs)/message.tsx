import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../login";
import React, { useState } from 'react';

const TabTwoScreen = () => {
  const [messageList, setMessageList] = useState<string[] | number[]>([
    'Lois Houle',
    'Vince Pearce',
    'Abigail Francis',
    'Joan Armstrong',
    'Gerard Parkinson',
    'Polly Lucas',
    'Cade Barber',
    'Maria Estrada',
    'Cary Mack',
    'Sigmund Curry',
    'Greg Bates',
    'Geneva Shelton',
    'Molly Harper',
    'Isabella Curreyw'
  ]);

  const HomeScreen = () => {
    const { navigate } = useNavigation<any>();
    return (
      <Pressable
        onPress={() => {
          navigate("login", { login });
        }}
      >
        <Text>123</Text>
      </Pressable>
    );
  };
  return (
    <View style={{backgroundColor:'white'}}>
      <Text style={styles.chatTitle}>ChatList</Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {
          messageList.map(item => {
            return (<TouchableOpacity

              style={styles.touchable}
              onPress={() => { }}
              activeOpacity={0.8}>
              <Image style={styles.chatIma} source={{
                uri: `https://i.pravatar.cc/150?img=${item}`,
              }}></Image>
              <View>
                <Text style={styles.UserName}>{item}</Text>
                <Text style={styles.shortmessage}>message</Text>
              </View>
            </TouchableOpacity>)
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chatTitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#f8f8f8',
    padding: 10
  },
  chatIma: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10
  },
  UserName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  shortmessage: {
    color: 'gray'
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  viewWrap: {
    height: 200,
    backgroundColor: "gray",
    padding: 15,
  },
  toparea: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
  },
  topIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnArea: {
    flexDirection: "row",
    padding: 10,

    backgroundColor: "white",
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  iconWarp: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TabTwoScreen;
