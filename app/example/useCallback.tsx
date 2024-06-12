import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// useCallback記憶函數本身
// useCallback 會回傳該 callback 的 memoized 版本，它僅在依賴改變時才會更新。
const UseCallback = () => {
    const [num1, setNumber1] = useState(1);
    const [num2, setNumber2] = useState(2);
    const sum = useCallback(() => num1 + num2, [num1, num2]);
    const handleCount = () => {
        setNumber1(num1 + 1);
    }

    return (
        <View>
            <Text>{sum()}</Text>
            <Button title='add number' onPress={handleCount}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseCallback;
