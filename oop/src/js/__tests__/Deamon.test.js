import Daemon from "../Daemon";

test( 'should throw error for invalid name length', () => {
  expect( () => new Daemon( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Daemon( 'Test' );

  expect( character.name ).toBe( 'Test' );
  expect( character.type ).toBe( 'Daemon' );
  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 1 );
  expect( character.attack ).toBe( 10 );
  expect( character.defence ).toBe( 40 );
} );
