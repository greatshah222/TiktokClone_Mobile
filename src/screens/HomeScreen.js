import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from '../components/Post';
import posts from '../../data/posts';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        // we will snap like in tiktok not like facebook and stuff
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        // how fast post will move up
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
