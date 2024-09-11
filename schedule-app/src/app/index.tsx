import { TaskTable, useTaskTable } from "@/database/useTasksTable";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Alert, Button, FlatList } from "react-native"

export default function Home(){

    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const taskTable = useTaskTable();
    const [tasks, setTasks] = useState<TaskTable[]>([])
    const [textSearch, setTextSearch] = useState("");

    async function create(){
        try{
            const response = await taskTable.create(
                {description, date}
            );
            Alert.alert("Tarefa Criada!");
            search();
        }catch(error){
            console.log("Erro no cadastramento");
        }
    }

    async function search(){
        const response = await taskTable.search(textSearch);
        setTasks(response);
        console.log(response);
    }

    useEffect(() => {
        search();
    },[textSearch])

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

            <View>
                <TextInput placeholder="Pesquisar Tarefa" onChangeText={setTextSearch} />
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=>
                    <Text>
                        {item.id} - {item.description} - {item.date}
                    </Text>
                }
            />
        </View>
    );
}