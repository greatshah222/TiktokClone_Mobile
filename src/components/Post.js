import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePressed = e => {
    setPaused(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPlayPausePressed} style={styles.pressable}>
        <Video
          source={{
            uri: 'https://suiterc.icareus.com/s3files/10154/3409917/267201.mp4/1.0.mp4?organizationId=3409909',
          }}
          resizeMode={'cover'}
          style={styles.video}
          repeat={true}
          paused={paused}
        />
        <View style={styles.uiContainer}>
          <View style={styles.rightContainer}>
            <Pressable onPress={() => console.log('pressed')}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
              />
            </Pressable>
            <View style={styles.iconContainer}>
              <AntDesign name="heart" size={35} color={'#fff'} />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome name="commenting" size={35} color={'#fff'} />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <Fontisto name="share-a" size={35} color={'#fff'} />
              <Text style={styles.statsLabel}>123</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>@bishalshah</Text>
              <Text style={styles.description}>Description by bishal</Text>
              <View style={styles.songContainer}>
                <Entypo name="beamed-note" size={24} color={'#fff'} />
                <Text style={styles.songName}>Name of the song</Text>
              </View>
            </View>
            <Image
              style={styles.songImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  pressable: {
    flex: 1,
  },

  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  uiContainer: {
    position: 'absolute',
    bottom: 60,

    width: '100%',
    flex: 1,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    flex: 1,
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },

  bottomContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },

  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },

  iconContainer: {
    alignItems: 'center',
  },
});