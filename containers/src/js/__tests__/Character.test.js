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
  const correct   = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
  }

  expect( character ).toEqual( correct );
} );

