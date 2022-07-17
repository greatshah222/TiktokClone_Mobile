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

const Post = ({
  post: post1,
  post: {
    videoUri,
    user: {imageUri, username},
    likes,
    comment,
    shares,

    description,
    songName,
    songImage,
  },
}) => {
  const [paused, setPaused] = useState(false);

  const [post, setPost] = useState(post1);

  const [isLiked, setIsLiked] = useState(false);

  const onPlayPausePressed = () => {
    setPaused(prev => !prev);
  };

  const onLikesPressed = () => {
    console.log(post?.likes);
    const likesToAdd = isLiked ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});
    setIsLiked(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPlayPausePressed} style={styles.pressable}>
        <Video
          source={{
            uri: videoUri,
          }}
          resizeMode={'cover'}
          style={styles.video}
          repeat={true}
          paused={paused}
          muted={true}
        />
        <View style={styles.uiContainer}>
          <View style={styles.rightContainer}>
            <Pressable onPress={() => console.log('pressed')}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: imageUri,
                }}
              />
            </Pressable>
            <Pressable
              onPress={() => onLikesPressed()}
              style={({pressed}) => [
                styles.iconContainer,
                pressed && styles.pressed,
              ]}>
              <AntDesign
                name="heart"
                size={35}
                color={isLiked ? 'red' : '#fff'}
              />
              <Text style={styles.statsLabel}>{likes}</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.iconContainer,
                pressed && styles.pressed,
              ]}>
              <FontAwesome name="commenting" size={35} color={'#fff'} />
              <Text style={styles.statsLabel}>{comment}</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.iconContainer,
                pressed && styles.pressed,
              ]}>
              <Fontisto name="share-a" size={35} color={'#fff'} />
              <Text style={styles.statsLabel}>{shares}</Text>
            </Pressable>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>@{username}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.songContainer}>
                <Entypo name="beamed-note" size={24} color={'#fff'} />
                <Text style={styles.songName}>{songName}</Text>
              </View>
            </View>
            <Image
              style={styles.songImage}
              source={{
                uri: songImage,
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
  pressed: {opacity: 0.6},

  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  uiContainer: {
    position: 'absolute',
    bottom: 180,

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
