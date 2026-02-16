import { Cache } from './pokecache.js';

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    this.cache = new Cache(60000);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area/`;

    const cache=this.cache.get<ShallowLocations>(url);
    if(cache){
      console.log("Using cache...");
      return cache;
    } 

    const response = await fetch(url);

   if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }
    const result = await response.json();
    this.cache.add(url, result);
    return result as ShallowLocations;

  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cached = this.cache.get<Location>(url);
    if (cached) {
      console.log("Using cache...");
      return cached;
    }

     const response = await fetch(url);

   if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    this.cache.add(url, result);
    return result as Location;

  }

  async fetchPokemon(name: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${name}`;

    const cache=this.cache.get<Pokemon>(url);
    if(cache){
      console.log("Using cache...");
      return cache;
    } 

     const response = await fetch(url);

   if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    this.cache.add(url, result);
    return result as Pokemon;

  }

}




export type ShallowLocations = {
  // add properties here
   count: number;
   next: string | null;
   previous: string | null;
   results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  // add properties here
   id: number;
   name: string;
   pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};