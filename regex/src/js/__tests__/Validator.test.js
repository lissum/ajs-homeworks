import Validator from "../Validator";

let validator;

beforeEach( () => {
  validator = new Validator();
} );

describe( 'validateUsername', () => {
  // Data-driven test for valid usernames
  test.each( [
    'john',
    'johnDoe',
    'john123doe',
    'john-doe',
    'john_doe',
    'j123d',
    'a',  // Single character valid username
    'john_doe-123ABCz'  // Mix of all allowed characters
  ] )( 'should return true for valid username: %s', ( username ) => {
    expect( validator.validateUsername( username ) ).toBe( true );
  } );

  // Data-driven test for invalid characters
  test.each( [
    'john@doe',
    'john.doe',
    'john$doe',
    'привет',
    'john!',
    'john#doe',
    'john_doe-123ABС',  // С на кириллице
    ''  // Empty string
  ] )( 'should return false for username with invalid characters: %s', ( username ) => {
    expect( validator.validateUsername( username ) ).toBe( false );
  } );

  // Data-driven test for more than three consecutive digits
  test.each( [
    'john1234doe',
    'j1234d',
    'abc12345',
    'a9876b'
  ] )( 'should return false for username with more than three consecutive digits: %s', ( username ) => {
    expect( validator.validateUsername( username ) ).toBe( false );
  } );

  // Data-driven test for starting with digits, underscores, or hyphens
  test.each( [
    '123john',
    '_john',
    '-john',
    '1john',
    '_johnDoe'
  ] )( 'should return false for username starting with digits, underscores, or hyphens: %s', ( username ) => {
    expect( validator.validateUsername( username ) ).toBe( false );
  } );

  // Data-driven test for ending with digits, underscores, or hyphens
  test.each( [
    'john123',
    'john_',
    'john-',
    'johnDoe1',
    'johnDoe_'
  ] )( 'should return false for username ending with digits, underscores, or hyphens: %s', ( username ) => {
    expect( validator.validateUsername( username ) ).toBe( false );
  } );
} );
