import Team from "./Team";
import Character from "./Character";
import { canIterate } from "./functions";

const team = new Team();

const bowman    = new Character( 'Лучник', 'Bowman' );
const swordsman = new Character( 'Мечник', 'Swordsman' );

team.add( bowman );
team.add( swordsman );

// Now you can iterate over the team
for ( const character of team ) {
  console.log( character.name ); // Will print "Лучник", then "Мечник"
}

console.log( canIterate( team ) );
console.log( canIterate( 'Any String' ) );
console.log( canIterate( 1 ) );
