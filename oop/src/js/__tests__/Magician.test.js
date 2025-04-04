import Magician from "../Magician";

test( 'should throw error for invalid name length', () => {
  expect( () => new Magician( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Magician( 'Test' );
  const correct = {
    name: 'Test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect( character ).toEqual( correct );
} );
