import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RootNavigation from './src/components/navigation/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
