import Undead from "../Undead";

test( 'should throw error for invalid name length', () => {
  expect( () => new Undead( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Undead( 'Test' );
  const correct = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect( character ).toEqual( correct );
} );
