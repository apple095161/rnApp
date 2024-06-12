import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


//useRef 常用在父元件訪問子元件的內容或觸發函式使用

const UseRef = () => {
    const inputRef = useRef<any>(null);
    return (
        <View>
            <TextInput
                onChangeText={(value) => {
                    console.log(value)
                }}
                value={'1234'}
            />
            <Button title='posts' onPress={() => {
                console.log(inputRef.current.value)
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseRef;
