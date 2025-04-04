import ErrorRepository from "../ErrorRepository"

let errorRepo;

beforeEach( () => {
  errorRepo = new ErrorRepository();

  errorRepo.addError( 404, 'Not Found' );
  errorRepo.addError( 500, 'Server Error' );
} );

test( 'should translate known error codes', () => {
  expect( errorRepo.translate( 404 ) ).toBe( 'Not Found' );
  expect( errorRepo.translate( 500 ) ).toBe( 'Server Error' );
} );

test( 'should return "Unknown error" for unknown codes', () => {
  expect( errorRepo.translate( 999 ) ).toBe( 'Unknown error' );
  expect( errorRepo.translate( 0 ) ).toBe( 'Unknown error' );
} );

test( 'should handle empty repository', () => {
  const emptyRepo = new ErrorRepository();

  expect( emptyRepo.translate( 404 ) ).toBe( 'Unknown error' );
} );

test( 'should update error description for existing code', () => {
  errorRepo.addError( 404, 'Page Not Found' );

  expect( errorRepo.translate( 404 ) ).toBe( 'Page Not Found' );
} );
