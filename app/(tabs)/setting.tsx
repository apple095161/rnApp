import { StyleSheet, Image, Platform, ImageBackground, View, Text, Switch } from 'react-native';
import Icon from '@expo/vector-icons/Octicons'
import FwIcon from '@expo/vector-icons/FontAwesome5'
import React, { useState } from 'react';

export default function Try() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [form, setForm] = useState<any>({
    isEnabled: false
  })
  const toggleSwitch = (value: any) => {
    setForm({ ...form, isEnabled: !form.isEnabled })
    setIsEnabled(previousState => !previousState)
    console.log(value)
  };
  const [settingType, setSettingType] = useState<any[]>([
    {
      title: '位置',
      type: 'text',
      key: '',
      icon: 'map-marker-alt'
    },
    {
      title: '通知',
      type: 'switch',
      key: 'isEnabled',
      icon: 'bell',
      value: 'on'
    },
    {
      title: '語言',
      type: 'text',
      key: '',
      icon: 'align-justify'
    },
    {
      title: '幫助中心',
      type: 'text',
      key: '',
      icon: 'align-justify'
    }
  ])
  return (
    <View style={styles.settingWrap}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.profile}>
        <Image style={styles.profileImg} source={require('@/assets/images/profileImg.jpg')}></Image>
        <View style={styles.profileText}>
          <Text>Jace Wu</Text>
          <Text style={{ color: 'rgb(192, 201, 221)' }}>我是個人介紹文字喔喔喔喔喔</Text>
        </View>
      </View>
      <View style={styles.settingLayout}>
        {
          settingType.map((item, i) => {
            return (
              item.type === 'text' ? <View key={i} style={styles.settingItem} >
                <View style={styles.iconArea}>
                  <FwIcon
                    name={item.icon}
                    size={30}
                    color="black"
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemValue}>高雄市</Text>
                  </View>
                </View>
                <Icon
                  name="chevron-right"
                  size={20}
                  color="black"
                />
              </View> : item.type === 'switch' ? <View key={i} style={styles.settingItem}>
                <View style={styles.iconArea}>
                  <FwIcon
                    name={form[item.key] ? 'bell' : 'bell-slash'}
                    size={30}
                    color="black"
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemValue}>{form[item.key] ? 'on' : 'off'}</Text>
                  </View>
                </View>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={form.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={form[item.key]}
                />
              </View> :
                <View key={i} style={styles.settingItem}>
                  <Text style={styles.itemTitle}>位置</Text>
                  <FwIcon
                    name="frown-open"
                    size={20}
                    color="black"
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemValue}>預設值</Text>
                  </View>
                </View>
            )
          })
        }
        {/* <View style={styles.settingItem}>
          <Text>通知</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingWrap: {
    gap: 5,
    padding: 15
  },
  title: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 34
  },
  profile: {
    flexDirection: 'row'
  },
  profileImg: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  profileText: {
    justifyContent: 'center',
    gap: 5
  },
  settingLayout: {
    marginTop: 20
  },
  settingItem: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 5
  },
  iconArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemValue: {
    color: 'gray'
  }
});
