/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local

*/
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Svg, Path, Rect, Mask} from 'react-native-svg';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mapbox from './components/MapBox';
import UiScreen from './components/Screen';
const Tab = createBottomTabNavigator();
const Cop = () => {
  return <View></View>;
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{backgroundColor: 'red'}}
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#E2E8F0',
          },
          tabBarIcon: ({focused, color, size}) => {
            if (route.name == 'Neko') {
              if (focused) {
                return (
                  <Image
                    source={require('./assets/Frame891.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./assets/Frame89.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              }
            } else if (route.name == 'Reko') {
              if (focused) {
                return (
                  <Image
                    source={require('./assets/Frame911.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./assets/Frame91.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              }
            } else if (route.name == 'Home') {
              if (focused) {
                return (
                  <Image
                    source={require('./assets/Frame901.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./assets/Frame90.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              }
            } else if (route.name == 'Settings') {
              if (focused) {
                return (
                  <Image
                    source={require('./assets/Frame921.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./assets/Frame92.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              }
            }
          },
          header: ({navigation, route, options}) => {
            return null;
          },
          title: () => {},
        })}>
        <Tab.Screen name="Home" component={UiScreen} />
        <Tab.Screen name="Settings" component={Cop} />
        <Tab.Screen name="Neko" component={Mapbox} />
        <Tab.Screen name="Reko" component={Cop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
