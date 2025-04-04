import Validator from "../Validator";

let validator;

beforeEach( () => {
  validator = new Validator();
} );

describe( 'validateUsername', () => {
  // Test for valid usernames
  test( 'should return true for valid usernames', () => {
    expect( validator.validateUsername( 'john' ) ).toBe( true );
    expect( validator.validateUsername( 'john123doe' ) ).toBe( true );
    expect( validator.validateUsername( 'john-doe' ) ).toBe( true );
    expect( validator.validateUsername( 'john_doe' ) ).toBe( true );
    expect( validator.validateUsername( 'johnDoe' ) ).toBe( true );
    expect( validator.validateUsername( 'j123d' ) ).toBe( true );
  } );

  // Test for invalid characters
  test( 'should return false for usernames with invalid characters', () => {
    expect( validator.validateUsername( 'john@doe' ) ).toBe( false );
    expect( validator.validateUsername( 'john.doe' ) ).toBe( false );
    expect( validator.validateUsername( 'john$doe' ) ).toBe( false );
    expect( validator.validateUsername( 'привет' ) ).toBe( false );
    expect( validator.validateUsername( 'john!' ) ).toBe( false );
    expect( validator.validateUsername( 'john#doe' ) ).toBe( false );
    expect( validator.validateUsername( 'john123' ) ).toBe( false );
  } );

  // Test for more than three consecutive digits
  test( 'should return false for usernames with more than three consecutive digits', () => {
    expect( validator.validateUsername( 'john1234doe' ) ).toBe( false );
    expect( validator.validateUsername( 'j1234d' ) ).toBe( false );
    expect( validator.validateUsername( 'abc12345' ) ).toBe( false );
    expect( validator.validateUsername( 'a9876b' ) ).toBe( false );
  } );

  // Test for starting with digits, underscores, or hyphens
  test( 'should return false for usernames starting with digits, underscores, or hyphens', () => {
    expect( validator.validateUsername( '123john' ) ).toBe( false );
    expect( validator.validateUsername( '_john' ) ).toBe( false );
    expect( validator.validateUsername( '-john' ) ).toBe( false );
    expect( validator.validateUsername( '1john' ) ).toBe( false );
    expect( validator.validateUsername( '_johnDoe' ) ).toBe( false );
  } );

  // Test for ending with digits, underscores, or hyphens
  test( 'should return false for usernames ending with digits, underscores, or hyphens', () => {
    expect( validator.validateUsername( 'john123' ) ).toBe( false );
    expect( validator.validateUsername( 'john_' ) ).toBe( false );
    expect( validator.validateUsername( 'john-' ) ).toBe( false );
    expect( validator.validateUsername( 'johnDoe1' ) ).toBe( false );
    expect( validator.validateUsername( 'johnDoe_' ) ).toBe( false );
  } );

  // Test edge cases
  test( 'should handle edge cases appropriately', () => {
    // Empty string should be invalid (starts and ends with nothing)
    expect( validator.validateUsername( '' ) ).toBe( false );

    // Single character valid username
    expect( validator.validateUsername( 'a' ) ).toBe( true );

    // Username with exactly three consecutive digits (valid)
    expect( validator.validateUsername( 'john123doe' ) ).toBe( true );

    // Username with a mix of all allowed characters
    expect( validator.validateUsername( 'john_doe-123ABС' ) ).toBe( false ); // С на кириллице
    expect( validator.validateUsername( 'john_doe-123ABCz' ) ).toBe( true );
  } );
} );
