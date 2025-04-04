import Team from '../Team';
import Character from '../Character'

let team;

const char1 = new Character( 'Olesya', 'Magician' );
const char2 = new Character( 'Ivan', 'Bowman' );
const char3 = new Character( 'Vlad', 'Swordsman' );

beforeEach( () => {
  team = new Team();
} );

test( 'should add single character', () => {
  team.add( char1 );
  expect( team.toArray() ).toEqual( [char1] );
} );

test( 'should throw error when adding duplicate character', () => {
  team.add( char1 );
  expect( () => team.add( char1 ) ).toThrow( 'Character already exists in the team' );
} );

test( 'should add multiple characters without duplicates', () => {
  team.addAll( char1, char2, char3, char1 );
  const result = team.toArray();
  expect( result ).toEqual( [char1, char2, char3] );
  expect( result.length ).toBe( 3 );
} );

test( 'should convert to array correctly', () => {
  team.add( char1 );
  team.add( char2 );
  const array = team.toArray();
  expect( array ).toEqual( [char1, char2] );
  expect( Array.isArray( array ) ).toBe( true );
} );

test( 'should handle empty team', () => {
  expect( team.toArray() ).toEqual( [] );
} );
