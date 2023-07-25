import {useState} from 'react';
import {View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken(
  'sk.eyJ1IjoibmJvYmljMSIsImEiOiJjbGtneWhwZTMwNmF1M2Vxamdta2pycjc3In0.jGEohkSjIlS-UP08gbLBhA',
);

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
