import Character from "./Character";

export default class Daemon extends Character {
  constructor( name ) {
    super( name, 'Daemon' );

    this._attack  = 10;
    this._defence = 40;
    this._distance = 1;
  }
}
