import { useState } from "react";
import { Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SearchBar } from "react-native-screens";

const mapRegion= {
    latitude: -24.706058738347295,
    longitude: -48.0091266716819,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

export default function Mapa4(){

    const [markersList, setMarkersList] = useState([
        {
            id: 1,
            latitude: -24.703849,
            longitude: -48.007183,
            title: "Ponto 1",
            description: "Ponto de Ônibus de teste rua sem saída"
        },
        {
            id: 2,
            latitude: -24.702543,
            longitude: -48.006223,
            title: "Ponto 2",
            description: "Ponto de Ônibus de teste pracinha rodoviária"
        },
        {
            id: 3,
            latitude: -24.703250,
            longitude: -48.005935,
            title: "Ponto 3",
            description: "Ponto de Ônibus próximo à entrada da escola"
        },
        {
            id: 4,
            latitude: -24.704568,
            longitude: -48.006349,
            title: "Ponto 4",
            description: "Ponto de Ônibus em frente à pracinha"
        },
        {
            id: 5,
            latitude: -24.703861,
            longitude: -48.008461,
            title: "Ponto 5",
            description: "Ponto de Ônibus ao lado da padaria"
        },
        {
            id: 6,
            latitude: -24.704549,
            longitude: -48.003767,
            title: "Ponto 6",
            description: "Ponto de Ônibus na esquina da farmácia"
        },
        {
            id: 7,
            latitude: -24.704910,
            longitude: -48.005283,
            title: "Ponto 7",
            description: "Ponto de Ônibus em frente ao supermercado"
        }
    ]);
    
    return(
        <View style={{ flexDirection: 'column', paddingTop: 40}}>
            <View style={{ height:"7%", width:"100%", backgroundColor:'gray'}}>
                <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', margin: 10}}>
                    BUS.IO
                </Text>
                <SearchBar
                  placeholder="Olá"
                  lightTheme={true}
                />
            </View>

            <View style={{ height:"93%", width:"100%", backgroundColor:'pink'}}>
                <MapView
                    style={{...StyleSheet.absoluteFillObject}}
                    initialRegion={mapRegion}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    loadingEnabled={true}
                >
                {markersList.map(marker => {
                    return (
                        <Marker
                          key={marker.id}
                          coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                          }}
                          title={marker.title}
                          description={marker.description}
                        />
                    );
                })}
                </MapView>
            </View>
        </View>
    );
}
