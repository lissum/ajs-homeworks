import Undead from "../Undead";

test( 'should throw error for invalid name length', () => {
  expect( () => new Undead( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Undead( 'Test' );

  expect( character.name ).toBe( 'Test' );
  expect( character.type ).toBe( 'Undead' );
  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 1 );
  expect( character.attack ).toBe( 25 );
  expect( character.defence ).toBe( 25 );
} );
