import Magician from "./Magician";

test( 'should level up', () => {
  const character = new Magician( 'Test' );
  character.health = 11;

  character.levelUp();

  expect( character.health ).toBe( 100 );
  expect( character.level ).toBe( 2 );
  expect( character.attack ).toBe( 12 );
  expect( character.defence ).toBe( 48 );
} );

test( 'should throw error for died character', () => {
  expect( () =>{
    const character = new Magician( 'Test' );
    character.health = 0;

    character.levelUp();
  }).toThrow(
    'Нельзя повысить левел умершего'
  );
} );
