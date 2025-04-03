import sortHeroesByHealth from "../heroes";

test( 'should sort heroes by health in descending order', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  const result = sortHeroesByHealth( heroes );
  expect( result ).toEqual( expected );
} );
