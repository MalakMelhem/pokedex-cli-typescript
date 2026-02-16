// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";
import { getCommands } from "./get_commands.js";

function main() {
  const state= initState();
  state.commands=getCommands();
  startREPL(state);
}

main();