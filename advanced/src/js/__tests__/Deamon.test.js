import Daemon from "../Daemon";

test( 'should throw error for invalid name length', () => {
  expect( () => new Daemon( 'A' ) ).toThrow( 'Name must be a string between 2 and 10 characters' );
} );

test( 'should create correct character', () => {
  const character = new Daemon( 'Test' );
  const correct   = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 10,
    _defence: 40,
    _distance: 1,
  };

  expect( character ).toEqual( correct );
} );
