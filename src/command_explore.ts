import type{ State } from './state.js';


export async function commandExplore(state:State, ...args: string[]) :Promise<void>{
    if (args.length === 0) {
     console.log("Please provide a location area name.");
     return;
    }
    const areaName = args.join("-").toLowerCase();

    console.log(`Exploring ${areaName}...`);

    const data= await state.pokeapi.fetchLocation(areaName);
    console.log("Found Pokemon:");

    for (const encounter of data.pokemon_encounters) {
    console.log(` - ${encounter.pokemon.name}`);
    }
}