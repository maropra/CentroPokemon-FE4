export const enviarForm = async (todo) => {
    try{
        const rta = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
        if(rta.ok){
            return rta.json()
        }
    }catch(err){
        console.log(err);
    }
}