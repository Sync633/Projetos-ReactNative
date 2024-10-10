import { Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const {width, height} = Dimensions.get('screen')
const mapRegion= {
    latitude: -24.706058738347295,
    longitude: -48.0091266716819,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

export default function Mapa3(){
    return(
        <View style={styles.container}>
            <MapView
            onMapReady={() => {
                Platform.OS === 'android' ?
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                    .then(() => {
                        console.log("USUARIO ACEITOU")
                    })
                : ''
            }}
                style={{width: width, height: height}}
                initialRegion={mapRegion}
                zoomEnabled={true}
                showsUserLocation={true}
                loadingEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    }
})