import ArrayBufferConverter from '../ArrayBufferConverter';
import { getBuffer } from "../functions";

describe( 'ArrayBufferConverter', () => {
  let converter;

  beforeEach( () => {
    converter = new ArrayBufferConverter();
  } );

  test( 'should create an instance with null buffer', () => {
    expect( converter.buffer ).toBeNull();
  } );

  test( 'should load an ArrayBuffer', () => {
    const buffer = getBuffer();
    converter.load( buffer );
    expect( converter.buffer ).toBe( buffer );
  } );

  test( 'should throw error when loading non-ArrayBuffer', () => {
    expect( () => {
      converter.load( 'not a buffer' );
    } ).toThrow( 'Input must be an ArrayBuffer' );

    expect( () => {
      converter.load( null );
    } ).toThrow( 'Input must be an ArrayBuffer' );

    expect( () => {
      converter.load( undefined );
    } ).toThrow( 'Input must be an ArrayBuffer' );

    expect( () => {
      converter.load( {} );
    } ).toThrow( 'Input must be an ArrayBuffer' );
  } );

  test( 'should throw error when calling toString on empty buffer', () => {
    expect( () => {
      converter.toString();
    } ).toThrow( 'Buffer is empty. Please load data first' );
  } );

  test( 'should convert buffer to string correctly', () => {
    const buffer         = getBuffer();
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    converter.load( buffer );
    const result = converter.toString();

    expect( result ).toBe( expectedString );
  } );

  test( 'should handle empty string in buffer', () => {
    const emptyData   = '';
    const emptyBuffer = new ArrayBuffer( emptyData.length * 2 );

    converter.load( emptyBuffer );
    const result = converter.toString();

    expect( result ).toBe( '' );
  } );

  test( 'should handle complex unicode characters', () => {
    // Create a buffer with complex characters
    const complexData = '{"data":{"user":{"name":"Иван😀🔥"}}}';
    const buffer      = new ArrayBuffer( complexData.length * 2 );
    const bufferView  = new Uint16Array( buffer );

    for ( let i = 0; i < complexData.length; i++ ) {
      bufferView[ i ] = complexData.charCodeAt( i );
    }

    converter.load( buffer );
    const result = converter.toString();

    expect( result ).toBe( complexData );
  } );
} );

describe( 'getBuffer function', () => {
  test( 'should return an ArrayBuffer', () => {
    const buffer = getBuffer();
    expect( buffer ).toBeInstanceOf( ArrayBuffer );
  } );

  test( 'should create correct buffer with expected content', () => {
    const buffer         = getBuffer();
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    const converter = new ArrayBufferConverter();
    converter.load( buffer );
    const result = converter.toString();

    expect( result ).toBe( expectedString );
  } );

  test( 'should create buffer with twice the length of input string', () => {
    const buffer         = getBuffer();
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect( buffer.byteLength ).toBe( expectedString.length * 2 );
  } );
} );
