import type{ State } from './state.js';


export async function commandCatch(state:State, ...args: string[]) :Promise<void>{
    if (args.length === 0) {
    console.log("You need to specify a Pokemon name.");
    return;
  }
  const name = args[0];
  console.log(`Throwing a Pokeball at ${name}...`);
   try {
    const pokemon = await state.pokeapi.fetchPokemon(name); 

    // Determine catch chance
    // Higher base_experience = harder to catch
    const baseExp = pokemon.base_experience ?? 50; // fallback if missing
    const catchProbability = Math.max(0.1, 1 - baseExp / 300); // 0.1 min chance

    if (Math.random() < catchProbability) {
      console.log(`${name} was caught!`);
      state.pokedex[name] = pokemon; // Add to user's pokedex
      console.log("You may now inspect it with the inspect command.");
    } else {
      console.log(`${name} escaped!`);
    }

  } catch (err) {
    console.log(`Could not find Pokemon "${name}".`);
  }
}
