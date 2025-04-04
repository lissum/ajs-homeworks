import { extractSpecialAttacks, orderByProps } from "./functions";

const obj    = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
const sortBy = ["name", "level"];

let result = orderByProps( obj, sortBy );
console.log( result );

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
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
}

result = extractSpecialAttacks( character );
console.log( result );
