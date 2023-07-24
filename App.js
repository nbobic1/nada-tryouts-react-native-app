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
  const [coordinates] = useState([78.9629, 20.5937]);
  const [route, setRoute] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [77.5946, 12.9716],
            [80.2707, 13.0827],
          ],
        },
      },
    ],
  });

  const [polygon, setPolygon] = useState({
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [72.685547, 20.055931],
          [76.640625, 21.207458],
          [76.904297, 17.978733],
          [72.685547, 20.055931],
        ],
      ],
    },
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation id="prvi_marker" coordinate={coordinates} />
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
});
export default App;
