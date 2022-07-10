import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
