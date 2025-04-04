import Zombie from "../Zombie";

test( 'should throw error for invalid name length', () => {
  expect( () => new Zombie( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Zombie( 'Test' );
  const correct = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect( character ).toEqual( correct );
} );
