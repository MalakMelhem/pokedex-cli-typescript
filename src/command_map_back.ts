import type{ State } from './state.js';

export async function commandMapBack(state:State):Promise<void> {
    if(state.prevLocationsURL===null){
        console.log("you're on the first page");
        return;
    }
    const locations= await state.pokeapi.fetchLocations(state.prevLocationsURL);
    
    for(const area of locations.results){
        console.log(area.name);
    }
    state.nextLocationsURL=locations.next;
    state.prevLocationsURL=locations.previous;
}
