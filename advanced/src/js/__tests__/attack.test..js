import Magician from "../Magician";
import Daemon from "../Daemon";

describe( 'Magician class', () => {

  test( 'should calculate attack correctly based on distance', () => {
    const magician  = new Magician( 'Merlin' );
    magician.attack = 100;

    // Distance 1 - no reduction
    magician.distance = 1;
    expect( magician.attack ).toBe( 100 );

    // Distance 2 - 90% power
    magician.distance = 2;
    expect( magician.attack ).toBe( 90 );

    // Distance 5 - 60% power
    magician.distance = 5;
    expect( magician.attack ).toBe( 60 );
  } );

  test( 'should calculate attack correctly with stoned effect', () => {
    const magician  = new Magician( 'Merlin' );
    magician.attack = 100;
    magician.stoned = true;

    // Distance 1 - no reduction from distance + no stoned effect (log2(1) = 0)
    magician.distance = 1;
    expect( magician.attack ).toBe( 100 );

    // Distance 2 - 90% power - log2(2)*5 = 90 - 5 = 85
    magician.distance = 2;
    expect( magician.attack ).toBe( 85 );

    // Distance 5 - 60% power - log2(5)*5 ≈ 60 - 11.6 = 48.4
    magician.distance    = 5;
    const expectedAttack = 60 - ( Math.log2( 5 ) * 5 );
    expect( magician.attack ).toBeCloseTo( expectedAttack );
  } );

  test( 'should handle invalid distance', () => {
    const magician  = new Magician( 'Merlin' );
    magician.attack = 100;

    expect( () => {
      magician.distance = 0;
    } ).toThrow( 'Distance must be a positive number' );

    expect( () => {
      magician.distance = -1;
    } ).toThrow( 'Distance must be a positive number' );
  } );

  test( 'should never return negative attack value', () => {
    const magician    = new Magician( 'Merlin' );
    magician.attack   = 10;
    magician.stoned   = true;
    magician.distance = 10; // Far enough to potentially get negative value

    expect( magician.attack ).toBeGreaterThanOrEqual( 0 );
  } );

  test( 'should properly set and retrieve stoned status', () => {
    const magician = new Magician( 'Merlin' );

    magician.stoned = true;
    expect( magician.stoned ).toBe( true );

    magician.stoned = false;
    expect( magician.stoned ).toBe( false );

    // Convert non-boolean values
    magician.stoned = 1;
    expect( magician.stoned ).toBe( true );

    magician.stoned = 0;
    expect( magician.stoned ).toBe( false );
  } );
} );

describe( 'Daemon class', () => {
  test( 'should calculate attack with stoned effect at various distances', () => {
    const daemon  = new Daemon( 'Lilith' );
    daemon.attack = 100;
    daemon.stoned = true;

    // Test a few specific distance cases
    const testCases = [
      {distance: 1, expected: 100},
      {distance: 2, expected: 85},
      {distance: 3, expected: 72.071}, // 80 - log2(3)*5 ≈ 80 - 7.93 = 72.07
      {distance: 4, expected: 60}, // 70 - log2(4)*5 = 70 - 10 = 60
      {distance: 5, expected: 48.39}  // 60 - log2(5)*5 ≈ 60 - 11.6 = 48.4
    ];

    testCases.forEach( ( {distance, expected} ) => {
      daemon.distance = distance;
      expect( daemon.attack ).toBeCloseTo( expected, 2 );
    } );
  } );

  test( 'should inherit levelUp method correctly', () => {
    const daemon   = new Daemon( 'Lilith' );
    daemon.attack  = 100;
    daemon.defence = 40;

    daemon.levelUp();

    expect( daemon.level ).toBe( 2 );
    expect( daemon.attack ).toBe( 120 ); // 100 * 1.2
    expect( daemon.defence ).toBe( 48 ); // 40 * 1.2
    expect( daemon.health ).toBe( 100 );
  } );

  test( 'should inherit damage method correctly', () => {
    const daemon   = new Daemon( 'Lilith' );
    daemon.defence = 50;

    daemon.damage( 60 );
    // damage taken = 60 * (1 - 50/100) = 60 * 0.5 = 30
    expect( daemon.health ).toBe( 70 );
  } );
} );
