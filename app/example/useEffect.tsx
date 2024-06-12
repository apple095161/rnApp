import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

// 當元件被加入時 (mount)，useEffect 會被第一次執行。
// 當每次元件重新渲染時，如果 dependencies 的值有改變，先將舊的 props 和 state 執行 cleanup function，再帶著新的 props 和 state 執行 setup function。
// cleanup function 的程式碼，會在元件生命週期結束 (unmount) 時，執行最後一次


const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) {
            const randomNum = 1 + Math.random() * 1000;
            setCount(randomNum);
        }
    }, [count]); // dependencies 如count的值有所改變,會執行useEffec一次
    // 如想mount只執行一次UseEffect則dependencies為空陣列即可
    return (
        <View>
            <Button title="Add" onPress={() => {
                setCount(0)
            }}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseEffect;
