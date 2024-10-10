import { Link } from "expo-router";
import { Text, View} from "react-native";


export default function Home(){
    return(
        <View>
            <Text>Página Incial</Text>
            <Link href={'./mapa1'}>Abrir Mapa 1</Link>
            <Link href={'./mapa2'}>Abrir Mapa 2</Link>
            <Link href={'./mapa3'}>Abrir Mapa 3</Link>
            <Link href={'./mapa4'}>Abrir Mapa 4</Link>
        </View>
    );
}