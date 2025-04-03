import Swordsman from "../Swordsman";

test( 'should throw error for invalid name length', () => {
  expect( () => new Swordsman( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Swordsman( 'Test' );

  expect( character.name ).toBe( 'Test' );
  expect( character.type ).toBe( 'Swordsman' );
  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 1 );
  expect( character.attack ).toBe( 40 );
  expect( character.defence ).toBe( 10 );
} );
