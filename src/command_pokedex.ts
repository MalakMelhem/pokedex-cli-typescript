import type{ State } from './state.js';

export async function commandPokedex(state:State) :Promise<void>{
     
    const pokedexItems = state.pokedex;
     console.log("Your Pokedex:");

    for(const key in pokedexItems){
        console.log(` - ${pokedexItems[key].name}`);

}
}