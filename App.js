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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken(
  'sk.eyJ1IjoibmJvYmljMSIsImEiOiJjbGtneWhwZTMwNmF1M2Vxamdta2pycjc3In0.jGEohkSjIlS-UP08gbLBhA',
);
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const [coordinates] = useState([18.410107299618403, 43.85754735842143]);
  const [scc] = useState([18.40807197932288, 43.85553119082344]);
  const [bbi] = useState([18.415763452554405, 43.85876456886843]);
  const [bolnica] = useState([18.408578829048874, 43.85840524543814]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={11} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation id="scc" coordinate={scc} />
          <MapboxGL.PointAnnotation id="bolnica" coordinate={bolnica} />
          <MapboxGL.PointAnnotation id="bbi" coordinate={bbi} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
    width: 60,
    backgroundColor: 'transparent',
    height: 70,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 5,
    flex: 1,
  },
  icon: {
    paddingTop: 10,
  },
  header: {
    color: '#000',
    fontFamily: 'Pangolin',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  category: {
    color: '#000',
    fontFamily: 'Pangolin',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  description: {
    color: '#000',
    fontFamily: 'Pangolin',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number: {
    color: '#000',
    fontFamily: 'Pangolin',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
});
export default App;
