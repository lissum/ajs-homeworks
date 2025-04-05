import read from './reader.js';
import json from './parser.js';
import GameSaving from "./GameSaving";

/*
export default class GameSavingLoader {
  static load() {
    return read()
      .then( data => json( data ) )
      .then( string => JSON.parse( string ) )
      .then( data => new GameSaving( data ) );
  }
}
*/

export default class GameSavingLoader {
  static async load() {
    try {
      const data   = await read();
      const string = await json( data );

      const parsedData = JSON.parse( string );

      return new GameSaving( parsedData );
    }
    catch ( error ) {
      throw error;
    }
  }
}
