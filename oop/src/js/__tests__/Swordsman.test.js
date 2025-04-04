import Swordsman from "../Swordsman";

test( 'should throw error for invalid name length', () => {
  expect( () => new Swordsman( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Swordsman( 'Test' );
  const correct = {
    name: 'Test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect( character ).toEqual( correct );
} );
