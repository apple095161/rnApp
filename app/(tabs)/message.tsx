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
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../login";

const TabTwoScreen = () => {
  const Stack = createNativeStackNavigator();

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
    <View>
      <View style={styles.viewWrap}>
        <Stack.Navigator>
          <Stack.Screen name="feed" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
        <View style={{ marginTop: 30 }}>
          <Text>您有5條消息未讀</Text>
        </View>
        <View style={styles.btnArea}>
          <View style={styles.iconWarp}>
            <Icon name="search" size={40} color="black" />
          </View>
          <View style={styles.iconWarp}>
            <Icon name="search" size={40} color="black" />
          </View>
          <View style={styles.iconWarp}>
            <Icon name="search" size={40} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
