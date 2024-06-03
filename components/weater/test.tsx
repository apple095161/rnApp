import React from 'react';
import { StyleSheet, View } from 'react-native';

const Test = () => {
    return (
        <View>
            {/* <View
                style={{
                    padding: 10,
                    opacity: 0.8,
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        backgroundColor: "rgba(20, 34, 70, 1.0)",
                        paddingTop: 50,
                        paddingBottom: 50,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 15,
                            marginLeft: 15,
                            flexWrap: "wrap",
                        }}
                    >
                        {status.map((item, i) => {
                            return (
                                <View key={i} style={{ width: "50%" }}>
                                    <View
                                        style={{
                                            borderBottomColor: "#606682",
                                            borderBottomWidth: 1,
                                            borderRightWidth: (i + 1) % 2 > 0 ? 1 : 0,
                                            borderRightColor: "#606682",
                                            padding: 20,
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Icons name={item.icon} size={30} color="white" />
                                        <Text style={{ color: "white" }}>{item.descript}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Test;
