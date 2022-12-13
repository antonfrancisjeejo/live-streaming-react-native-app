import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {useNavigation, useRoute} from '@react-navigation/native';
import credentials from '../credentials';

const HostPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId, username, liveId} = route.params;

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={credentials.appId}
        appSign={credentials.appSign}
        userID={userId}
        liveID={liveId}
        userName={username}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
};

export default HostPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
