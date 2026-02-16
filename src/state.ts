import { createInterface, type Interface } from "readline";
import { PokeAPI } from "./pokeapi.js";
import  type {Pokemon} from "./pokeapi.js";

export type State={
   readline: Interface;
   commands: Record<string, CLICommand>; 
   pokeapi: PokeAPI;
   nextLocationsURL: string | null;
   prevLocationsURL: string | null;
   pokedex: Record<string, Pokemon>;
}
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
    });
    const commands: Record<string, CLICommand> = {};
    const pokedex:  Record<string, Pokemon>={};
    return{
        readline:rl,
        commands:commands,
        pokeapi: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
        pokedex: pokedex,
    }
}
