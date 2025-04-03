import getHealthStatus from '../player';

const playersData = [
  [{name: 'мечник', health: 10}, 'critical'],
  [{name: 'маг', health: 100}, 'healthy'],
  [{name: 'лучник', health: 80}, 'healthy'],
  [{name: 'лекарь', health: 40}, 'wounded'],
];

let testCallback = test.each( playersData );

testCallback(
  'testing player %s health status to be expected to %s',
  ( playerData, expectedStatus ) => {
    let status = getHealthStatus( playerData );
    expect( status ).toBe( expectedStatus ); // Пример проверки
  }
);
