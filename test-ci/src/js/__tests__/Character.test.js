import Character from "../Character";

test( 'should create Character instance', () => {
  test( 'should throw error for invalid name length', () => {
    expect( () => new Character( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
    expect( () => new Character( 'VeryLongNameHere' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
  } );

  test( 'should throw error for invalid type', () => {
    expect( () => new Character( 'Test', 'InvalidType' ) ).toThrow(
      'Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'
    );
  } );

  test( 'should create character with default values', () => {
    const character = new Character( 'Test', 'Bowerman' );
    expect( character.name ).toBe( 'Test' );
    expect( character.type ).toBe( 'Bowerman' );
  } );
} );
