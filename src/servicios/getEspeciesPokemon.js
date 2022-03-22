export const obtenerEspeciesPokemon = async (url) => {
    try{
        const rta = await fetch(url);
        const json = await rta.json();
        return json;
    }catch(err){
        console.log(err);
    }
}