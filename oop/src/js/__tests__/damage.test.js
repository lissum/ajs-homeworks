import Bowman from "../Bowman";

test( 'should throw error for invalid points', () => {
  const character = new Bowman( 'Test' );
  expect( () => character.damage( -5 ) ).toThrow( 'Points must be a non-negative number' );
  expect( () => character.damage( '10' ) ).toThrow( 'Points must be a non-negative number' );
} );

test( 'should correctly reduce health for Bowerman (25 defence)', () => {
  const character = new Bowman( 'Test' );

  character.damage( 40 );
  expect( character.health ).toBeCloseTo( 70 ); // 40 * (1 - 25/100) = 30 damage

  character.damage( 100 );
  expect( character.health ).toBeCloseTo( 0 ); // 70 - (100 * 0.75) = -5 => 0
} );
