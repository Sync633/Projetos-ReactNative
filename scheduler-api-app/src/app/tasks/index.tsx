import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import {useApi} from '@/hook/useApi'

export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const api = useApi();

    async function getTasks(){
        const tasks = await api.listAll();
        setTasks(tasks);
    }

    useEffect(()=>{
        getTasks();
    }, []);

    return(
        <View>
            <Text>Listando Tarefas</Text>

            <FlatList
                data={tasks}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=>
                    <View>
                        <Text>
                            {item.id} - {item.description} - {item.date}
                        </Text>
                    </View>
                }
            />
        </View>
    )
}