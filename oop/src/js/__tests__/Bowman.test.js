import Bowman from "../Bowman";

test( 'should throw error for invalid name length', () => {
  expect( () => new Bowman( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Bowman( 'Test' );

  const correct = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect( character ).toEqual( correct );
} );
