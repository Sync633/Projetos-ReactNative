import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location'

export default function Mapa2(){

    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permissão de acesso à localização negada!");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            setInitialRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        };

        getLocation();
    }, []);

    return(
        <View>
            <View style={{height:35}}></View>
            <View></View>
            <View>
                {initialRegion && (
                    <MapView
                        style={{width:'100%', height:'100%'}}
                        initialRegion={initialRegion}
                        showsUserLocation
                    >
                        {currentLocation && (
                            <Marker
                                coordinate={{
                                    latitude: currentLocation.latitude,
                                    longitude: currentLocation.longitude,
                                }}
                            title="Sua Localização"
                            />
                        )}
                    </MapView>
                )}
            </View>
        </View>
    );
}