import Bowman from "../Bowman";

test( 'should throw error for invalid name length', () => {
  expect( () => new Bowman( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Bowman( 'Test' );

  expect( character.name ).toBe( 'Test' );
  expect( character.type ).toBe( 'Bowman' );
  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 1 );
  expect( character.attack ).toBe( 25 );
  expect( character.defence ).toBe( 25 );
} );
