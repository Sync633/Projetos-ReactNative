import { useSQLiteContext } from "expo-sqlite";

/* DEFINIÇÃO DE TIPOS PARA OS OBJETOS */
export type TaskTable = {
    id: number
    description: string
    date: string
}

export function useTaskTable(){

    const database = useSQLiteContext();

    async function create(data: Omit<TaskTable, "id">){
        const statement = await database.prepareAsync(
            "INSERT INTO tasks (description, date) VALUES ($description, $date)"
        );

        try{
            const result = await statement.executeAsync(
                {
                    $description: data.description,
                    $date: data.date
                }
            ); 
        }catch(error){
            throw error;
        }finally{
            await statement.finalizeAsync;
        }
    }
    

    /* FUNCIONALIDADE 2
    {
    
    }
    */

    return { create };

}