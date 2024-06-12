import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const UseMome = () => {


    // UseMome記憶value 本身
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const newNumber = useMemo(() => {
        return { value: number };
    }, [number]);

    const newCount = useMemo(() => {
        return { value: count };
    }, [count]);

    const handleNumber = () => {
        setNumber(number + 1);
    }
    const handleCount = () => {
        setCount(count + 1);
    }

    // useMemo 是 react 裡面一個用來讓 react 記住 value 的 hook。
    return (
        <div>
            <View>
                <Text>{newNumber.value}</Text>
                <Text>{newCount.value}</Text>
                <Button title='add number' onPress={handleNumber}></Button>
                <Button title='add count' onPress={handleCount}></Button>
            </View>
        </div>
    );
}

const styles = StyleSheet.create({})

export default UseMome;
