import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const AirComponent = () => {
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
                            name="thermometer-4"
                            size={20}
                            color="white"
                            style={{ marginRight: 10 }}
                        />
                        空氣品質
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: 'rgb(255, 255, 255)',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        fontSize: 18
                    }}>綠色的AQI燈號代表目前空氣品質良好，黃色代表 ... 建議大家每天出門前可以上環境部「空氣品質監測網」，或下載「環境即時通」APP查看即時空氣品質狀況
                    </Text>
                    <TouchableOpacity style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderTopColor: 'white',
                        borderTopWidth: 2,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >
                        <Text style={{ color: '#a6b4ce' }}>查看更多內容</Text>
                        <Icon
                            name="angle-right"
                            size={20}
                            color="white"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({})

export default AirComponent;
