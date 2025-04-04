import { extractSpecialAttacks } from '../functions';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://icon1.png',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://icon2.png'
    }
  ]
};

test( 'extracts id, name, icon and description from special attacks', () => {
  const result  = extractSpecialAttacks( character );
  const correct = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://icon1.png',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://icon2.png',
      description: 'Описание недоступно'
    }
  ];


  expect( result ).toEqual( correct );
} );

test( 'works with empty special attacks array', () => {
  const emptySpecialChar = {
    name: 'Тестовый',
    special: []
  };

  const result = extractSpecialAttacks( emptySpecialChar );

  expect( result ).toEqual( [] );
} );

test( 'handles case when all fields are missing except id', () => {
  const minimalSpecialChar = {
    name: 'Минимальный',
    special: [{id: 1}]
  };

  const result = extractSpecialAttacks( minimalSpecialChar );

  expect( result ).toEqual( [{
    id: 1,
    name: undefined,
    icon: undefined,
    description: 'Описание недоступно'
  }] );
} );
