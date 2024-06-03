import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const WeekWeather = () => {
    const [week, setWeek] = useState([
        {
            title: "星期一",
            icon: "heavyrain",
            temperature: "24",
        },
        {
            title: "星期二",
            icon: "sun",
            temperature: "28",
        },
        {
            title: "星期三",
            icon: "sun",
            temperature: "30",
        },
        {
            title: "星期四",
            icon: "cloud",
            temperature: "30",
        },
        {
            title: "星期五",
            icon: "cloud",
            temperature: "32",
        },
        {
            title: "星期六",
            icon: "sun",
            temperature: "33",
        },
        {
            title: "星期日",
            icon: "cloud",
            temperature: "25",
        },
    ]);
    return (
        <View
            style={{
                height: "auto",
                width: "100%",
                padding: 10,
            }}
        >
            <View
                style={{
                    marginBottom: 10,
                    backgroundColor: "#2e73b8",
                    borderRadius: 15,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white",
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                    >
                        <Icon
                            name="calendar"
                            size={20}
                            color="white"
                            style={{ marginRight: 10 }}
                        />
                        一周天氣預報
                    </Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                >
                    {week.map((item, i) => {
                        return (
                            <View style={styles.dailyWarter} key={i}>
                                {item.icon === "sun" ? (
                                    <Image
                                        source={require("@/assets/images/sun.png")}
                                        style={styles.weaterImg}
                                    ></Image>
                                ) : item.icon === "cloud" ? (
                                    <Image
                                        source={require("@/assets/images/cloud.png")}
                                        style={styles.weaterImg}
                                    ></Image>
                                ) : (
                                    <Image
                                        source={require("@/assets/images/heavyrain.png")}
                                        style={styles.weaterImg}
                                    ></Image>
                                )}
                                <Text style={styles.fontSizeWrap}>{item.title}</Text>
                                <Text style={styles.fontSizeWrap2}>
                                    {item.temperature}&#176;
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    weaterImg: {
        width: 30,
        height: 30,
        marginBottom: 15,
        marginTop: 15,
    },
    fontSizeWrap: {
        fontSize: 20,
        padding: 10,
    },
    fontSizeWrap2: {
        fontSize: 18,
        padding: 10,
    },
})

export default WeekWeather;
