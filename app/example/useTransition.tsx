import React, { useState, useTransition } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// 在不影響ui的渲染下更新頁面狀態
// 回傳一個 transition pending 狀態的 stateful 值，以及一個啟動 function。
// 當狀態切換時isPending 為active 這時候顯示isPending state頁面
// 當狀態isPending完成時,顯示各個tab

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');
    const selectTab = (value: string) => {
        startTransition(() => {
            setTab(value);
        });
    }
    return (
        <View>
            <Button title='about' onPress={() => {
                selectTab('about')
            }}></Button>
            <Button title='posts' onPress={() => {
                selectTab('posts')
            }}></Button>
            <Button title='contact' onPress={() => {
                selectTab('contact')
            }}></Button>

            {isPending && <Text>isPending state</Text>}
            <Text>
                {
                    tab === 'about' && <Text>about</Text>
                }
                {
                    tab === 'posts' && <Text>posts</Text>
                }
                {
                    tab === 'contact' && <Text>contact</Text>
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseTransition;
