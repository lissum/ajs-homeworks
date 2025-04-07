export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load( buffer ) {
    if ( ! ( buffer instanceof ArrayBuffer ) ) {
      throw new Error( 'Input must be an ArrayBuffer' );
    }
    this.buffer = buffer;
  }

  toString() {
    if ( ! this.buffer ) {
      throw new Error( 'Buffer is empty. Please load data first' );
    }

    // Convert ArrayBuffer to a string
    const bufferView = new Uint16Array( this.buffer );
    let result       = '';

    for ( let i = 0; i < bufferView.length; i++ ) {
      result += String.fromCharCode( bufferView[ i ] );
    }

    return result;
  }
}
