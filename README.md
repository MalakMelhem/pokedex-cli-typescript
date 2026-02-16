# Pokedex CLI

A terminal-based Pokedex game built with **Node.js and TypeScript** that interacts with the public [PokeAPI](https://pokeapi.co/api/v2).

The application allows the user to explore Pokemon locations, navigate paginated maps, catch Pokemon using probability logic, store them in a personal Pokedex, and inspect their stats — similar to the classic game mechanics but inside the command line.

---

## Features

* Explore Pokemon world locations
* Paginated map navigation (forward & back)
* Catch Pokemon with probability-based success
* Session-based Pokedex (stores caught Pokemon while the app is running)
* Inspect caught Pokemon stats
* In-memory caching system (TTL cache) to reduce API requests
* Fully interactive CLI interface

---

## Commands

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `help`               | Displays help menu             |
| `map`                | Shows available locations      |
| `mapb`               | Goes to previous page          |
| `explore <location>` | Lists Pokemon in a location    |
| `catch <pokemon>`    | Attempt to catch a Pokemon     |
| `inspect <pokemon>`  | View stats of a caught Pokemon |
| `pokedex`            | List all caught Pokemon        |
| `exit`               | Exit the program               |

---

## Tech Stack

* **TypeScript (v5)**
* Node.js
* Readline (CLI interface)
* REST API consumption using `async/await`
* [PokeAPI](https://pokeapi.co/)
* Custom TTL caching system
* Vitest unit testing

---

## Installation

Clone the repository:

```bash
https://github.com/MalakMelhem/pokedex-cli-typescript.git
```

Install dependencies:

```bash
npm install
```

Run the program:

```bash
npm run dev
```

---

## Example Usage

```
Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 - gyarados
 - remoraid
 - octillery
 - wingull
 - pelipper
 - shellos
 - gastrodon

Pokedex > catch pidgey
Throwing a Pokeball at pidgey...
pidgey was caught!

Pokedex > inspect pidgey
Name: pidgey
Height: 3
Weight: 18
Stats:
  -hp: 40
  -attack: 45
  -defense: 40

Pokedex > pokedex
Your Pokedex:
 - pidgey
```

---

## Author

Built by **Malak Melhem** as part of the Boot.dev with (FTS) training program.

