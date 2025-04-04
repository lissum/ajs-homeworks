import Character from "./Character";
import Team from "./Team";
import ErrorRepository from "./ErrorRepository";

const team     = new Team();
const mainHero = new Character( 'Olesya', 'Magician' );

team.add( mainHero );

console.log( team.toArray() );

let errorRepo = new ErrorRepository();
errorRepo.addError( 404, 'Not Found' );

console.log( errorRepo.translate( 404 ) )
