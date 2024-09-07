import { useTaskTable } from "@/database/useTasksTable";
import { useState } from "react";
import { View, Text, TextInput, Alert, Button } from "react-native"

export default function Home(){

    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const taskTable = useTaskTable();

    async function create(){
        try{
            const response = await taskTable.create(
                {description, date}
            );
            Alert.alert("Tarefa Criada!");
        }catch(error){
            console.log("Erro no cadastramento");
        }
    }

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:20}}>
            <Text>My Schedules - Task</Text>

            <View>
                <TextInput
                    placeholder="Descrição da Tarefa"
                    onChangeText={setDescription}
                    value={description}
                />

                <TextInput 
                    placeholder="Data"
                    onChangeText={setDate}
                    value={date}
                />

                <Button onPress={() => {create()}} title="Gravar" />
            </View>
        </View>
    );
}