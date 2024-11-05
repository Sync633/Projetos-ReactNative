import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home(){
    return(
        <View>
            <Text>Iniciando com API</Text>
            <Link href="./tasks">Listar as Tarefas</Link>
            <Link href="./addTask">Adicionar Nova Tarefa</Link>
        </View>
    );
}