import { useApi } from "@/hook/useApi";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function  AddTask(){
    const api = useApi();

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    async function saveData(){
        await api.addTask({description, date});
    }
    return(
        <View>
            <Text>Adicionando Tarefas</Text>

            <TextInput value={description} onChangeText={setDescription} placeholder="Descriçao"/>

            <TextInput value={date} onChangeText={setDate} placeholder="Data"/>

            <Button title="Salvar" onPress={()=>saveData()}/>
        </View>
    );
}