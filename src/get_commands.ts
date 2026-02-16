import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
import { commandMapBack } from './command_map_back.js';
import { commandExplore } from './command_explore.js';
import { commandCatch } from './command_catch.js';
import { commandInspect } from './command_inspect.js';
import { commandPokedex } from './command_pokedex.js'
import type { CLICommand } from './state.js';

export function getCommands():Record<string, CLICommand> {
  return{
    "exit": {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    "help":{
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
     "map":{
      name: "map",
      description: "Displays 20 location areas",
      callback: commandMap,
    },
    "mapb":{
      name: "mapb",
      description: "Displays the previous 20 location areas",
      callback: commandMapBack,
    },
    "explore":{
      name: "explore",
      description: "Explore a location area",
      callback: commandExplore,
    },
    "catch": {
      name: "catch",
      description: 'Catch a Pokemon by name',
      callback: commandCatch,
    },
    "inspect": {
     name: "inspect",
     description: "Inspect a caught Pokemon",
     callback: commandInspect,
},"pokedex":{
     name: "pokedex",
     description: "List the caught Pokemons in the pokedex",
     callback: commandPokedex,
}

  }
   
    
  
}