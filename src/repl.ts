import { getCommands } from "./get_commands.js";
import { exit } from 'node:process';
import type { State } from './state.js';

export function cleanInput(input: string): string[] {
    const trimmedString = input.trim().toLowerCase();
    const inputArray = trimmedString.split(/\s+/);
    return inputArray;
}


export function startREPL(state:State) {

    state.readline.prompt();

    state.readline.on('line', async (input) => {
        let words = cleanInput(input);
        // const commands = getCommands();
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }
        let commandName  = words[0];
        const args = words.slice(1);
        let command= state.commands[commandName];
        if (!command) {
          console.log("Unknown command");
          state.readline.prompt();
          return;
        } 

        try{
            await command.callback(state,...args);
        }catch(err){
            console.log("An error occurred while executing the command.");
        }
        
        state.readline.prompt();

    });
    state.readline.on('close', () => {
        exit(0);
    });
}