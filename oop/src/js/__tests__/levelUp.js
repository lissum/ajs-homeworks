import Magician from "../Magician";

test( 'should level up', () => {
  const character = new Magician( 'Test' );
  character.health = 11;

  character.levelUp();

  const correct = {
    name: "Test",
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  }

  expect( character ).toEqual( correct );
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
