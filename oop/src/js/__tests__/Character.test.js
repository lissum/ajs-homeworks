import Character from "../Character";

test( 'should throw error for invalid name length', () => {
  expect( () => new Character( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
  expect( () => new Character( 'VeryLongNameHere' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should throw error for invalid type', () => {
  expect( () => new Character( 'Test', 'InvalidType' ) ).toThrow(
    'Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'
  );
} );

test( 'should create character', () => {
  const character = new Character( 'Test', 'Bowman' );

  expect( character.name ).toBe( 'Test' );
  expect( character.type ).toBe( 'Bowman' );
  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 1 );
} );

