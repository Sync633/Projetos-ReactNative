import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Mapa1(){
    const mapRegion= {
      latitude: -24.706058738347295,
      longitude: -48.0091266716819,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return(
        <View className="flex-1 justify-center items-center">
            <Text>MapView - 1</Text>
            <MapView
                style={{width:'100%', height:'90%'}}
                region={mapRegion}
            >
            <Marker coordinate={mapRegion} title="Ginásio"/>
            </MapView>
        </View>
    );
}