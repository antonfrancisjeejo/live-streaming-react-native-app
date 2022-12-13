import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const [userId, setUserId] = useState('');
  const [liveId, setLiveId] = useState('');
  const [username, setUsername] = useState('');

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const joinOrStart = isHost => {
    navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
      userId,
      username,
      liveId,
    });
  };

  useEffect(() => {
    setUserId(String(Math.floor(Math.random() * 100000)));
    setLiveId(String(Math.floor(Math.random() * 10000)));
  }, []);

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.userId}>Your User Id: {userId}</Text>
      <Text style={[styles.liveId, styles.leftPadding]}>Live Id:</Text>
      <TextInput
        placeholder="Enter the Live ID. eg. 1242"
        style={styles.input}
        onChangeText={text => setLiveId(text)}
        maxLength={4}
        value={liveId}
      />
      <Text style={[styles.liveId, styles.leftPadding]}>Username:</Text>
      <TextInput
        placeholder="Enter your username. eg. anton"
        style={styles.input}
        onChangeText={text => setUsername(text)}
        maxLength={12}
        value={username}
      />
      <View style={[styles.buttonLine, styles.leftPadding]}>
        <Button
          disabled={liveId.length === 0}
          style={styles.button}
          title="Start a live"
          onPress={() => joinOrStart(true)}
        />

        <View style={styles.buttonSpacing} />
        <Button
          disabled={liveId.length === 0}
          style={styles.button}
          title="Watch Live"
          onPress={() => joinOrStart(false)}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
  },
  buttonSpacing: {
    width: 13,
  },
  input: {
    height: 42,
    width: 305,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#333333',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 35,
    marginBottom: 20,
  },
  userId: {
    fontSize: 14,
    color: '#2A2A2A',
    marginBottom: 27,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 20,
  },
  liveId: {
    fontSize: 14,
    color: '#2A2A2A',
    marginBottom: 5,
  },
  button: {
    height: 42,
    borderRadius: 9,
    backgroundColor: '#F4F7FB',
  },
  leftPadding: {
    paddingLeft: 35,
  },
});
