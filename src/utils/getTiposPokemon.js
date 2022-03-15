export const obtenerTiposPokemon = async () => {
    try{
        const rta = await fetch("https://pokeapi.co/api/v2/type/");
        const json = await rta.json();
        return json;
    }catch(err){
        console.log(err);
    }
}