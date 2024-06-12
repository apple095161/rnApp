import React, { useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';




// 當你需要複雜的 state 邏輯而且包括多個子數值或下一個 state 依賴之前的 state，useReducer 會比 useState 更適用。
// userReducer 資料是存在 component state，而 Redux 是存在 global store，

// 缺點
// useReducer 無法存取 global store
// useReducer 沒有 middleware，不能像 Redux 能用 thunk 或 saga 來做 data fetching、處理 side effect
const UseReducer = () => {
    const initialState = { count: 0 };
    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View>
            <Text>{state.count}</Text>
            <Button title='add' onPress={() => {
                dispatch({ type: 'increment' })
            }}></Button>
            <Button title='reduce' onPress={() => {
                dispatch({ type: 'decrement' })
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseReducer;
