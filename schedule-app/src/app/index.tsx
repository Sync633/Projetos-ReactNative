import { TaskTable, useTaskTable } from "@/database/useTasksTable";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";


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
        <View className="flex flex-1 justify-center items-center">
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

            <View className="h-80 w-11/12 bg-slate-100">
                <FlatList
                    data={tasks}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({item})=>
                        <View className="flex-row justify-between m-1 mb-3">
                            <Text>
                                {item.id} - {item.description} - {item.date}
                            </Text>
                            <View className="flex-row justify-between">
                                <FontAwesome6 name="edit" size={24} color="black" onPress={()=>router.push({pathname:'./update/[id]', params:{id:item.id}})}/>
                                <FontAwesome name="trash-o" size={24} color="black" onPress={()=>router.push({pathname:'./excluir/[id]', params:{id:item.id}})}/>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    );
}