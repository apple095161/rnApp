import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import Dropdown from "react-native-input-select";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const google = require("../assets/images/google.png");

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function LoginForm() {
  const textRef = useRef();
  const [page, setPage] = useState(true);
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedId, setSelectedId] = useState("1");
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Email",
        value: "option1",
      },
      {
        id: "2",
        label: "手機",
        value: "option2",
      },
    ],
    []
  );
  const getCountry = () => {
    fetch("../assets/mock/twZipCode.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const coutry = json.cities.map((item) => {
          return {
            title: item.name,
            ...item,
          };
        });
        setCountry(coutry);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCountry();
  }, []);

  if (!page) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="請輸入Email"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch
              value={click}
              onValueChange={setClick}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={click ? "#f5dd4b" : "#f4f3f4"}
            />
            <Text style={styles.rememberText}>記住我</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert("Forget Password!")}>
              <Text style={styles.forgetText}>忘記密碼?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Login Successfuly!",
                "see you in my instagram if you have questions : must_ait6"
              )
            }
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Text style={styles.optionsText}>快速登入</Text>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.otherBtn}
            onPress={() =>
              Alert.alert(
                "Login Successfuly!",
                "see you in my instagram if you have questions : must_ait6"
              )
            }
          >
            <Image source={google} style={styles.icons} />
            <Text style={styles.otherBtnText}>Google</Text>
          </Pressable>
        </View>
        {/* 
          <View style={styles.mediaIcons}>
            <Image source={google} style={styles.icons} />
            <Image source={google} style={styles.icons} />
            <Image source={google} style={styles.icons} />
          </View> */}

        <Text style={styles.footerText}>
          沒有帳號嗎?
          <Text
            style={styles.signup}
            onPress={() => {
              setPage(true);
            }}
          >
            註冊帳號
          </Text>
        </Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputView}>
        <View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            申請種類
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(value) => {
              console.log(value);
              setUsername("");
              setSelectedId(value);
            }}
            selectedId={selectedId}
            layout="row"
          />
        </View>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 15,
            marginBottom: 5,
          }}
        >
          Email
        </Text>
        {selectedId === "2" ? (
          <TextInput
            style={styles.input}
            placeholder="請輸入手機號碼"
            value={username}
            onChangeText={(text) => {
              let newText = "";
              let numbers = "0123456789";

              for (var i = 0; i < text.length; i++) {
                if (numbers.indexOf(text[i]) > -1) {
                  newText = newText + text[i];
                } else {
                }
              }
              setUsername(newText);
            }}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={10}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="請輸入Email"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
          />
        )}

        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 15,
            marginBottom: 5,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <View style={{ flexDirection: "row", height: 80 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              縣市
            </Text>
            <SelectDropdown
              data={country}
              style={{ borderWidth: 1, borderColor: "black" }}
              onSelect={(selectedItem, index) => {
                textRef.current.reset();
                const city = selectedItem.region.map((item) => {
                  return {
                    title: item.name,
                    ...item,
                  };
                });
                setCity(city);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View
                    style={[styles.dropdownButtonStyle, { marginRight: 5 }]}
                  >
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) || "請選擇縣市"}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              區域
            </Text>
            <SelectDropdown
              ref={textRef}
              data={city}
              style={{ borderWidth: 1, borderColor: "black" }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={[styles.dropdownButtonStyle, {}]}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) || "請選擇區域"}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
        </View>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="請輸入地址"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() =>
            Alert.alert(
              "Login Successfuly!",
              "see you in my instagram if you have questions : must_ait6"
            )
          }
        >
          <Text style={styles.buttonText}>註冊</Text>
        </Pressable>
      </View>
      <Text style={styles.footerText}>
        已有帳號嗎?
        <Text
          style={styles.signup}
          onPress={() => {
            setPage(false);
          }}
        >
          登入去
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#0171d3",
  },
  inputView: {
    gap: 10,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#0171d3",
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
    paddingVertical: 10,
  },
  switch: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: "#0171d3",
  },
  button: {
    backgroundColor: "#0171d3",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 15,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    position: "absolute",
    left: 0,
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
  signup: {
    color: "blue",
    fontSize: 13,
  },
  otherBtn: {
    position: "relative",
    backgroundColor: "white",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#0171d3",
    // borderWidth: 1,
    borderRadius: 7,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  otherBtnText: {
    color: "#0171d3",
  },
  dropdownButtonStyle: {
    flex: 1,
    height: 100,
    backgroundColor: "",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderColor: "rgba(1, 113, 211, 1.00)",
    borderWidth: 1,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
