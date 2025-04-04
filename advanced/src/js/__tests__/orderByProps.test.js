import { orderByProps } from "../functions";

  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

  test( 'sorts according to specified order first, then alphabetically', () => {
    const result = orderByProps( obj, ["name", "level"] );
    expect( result ).toEqual( [
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ] );
  } );

  test( 'works with empty order array (should sort all alphabetically)', () => {
    const result = orderByProps( obj, [] );
    expect( result ).toEqual( [
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10},
      {key: "level", value: 2},
      {key: "name", value: "мечник"}
    ] );
  } );

  test( 'works when order contains properties not in the object', () => {
    const result = orderByProps( obj, ["weapon", "name"] );
    expect( result ).toEqual( [
      {key: "name", value: "мечник"},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10},
      {key: "level", value: 2}
    ] );
  } );

  test( 'works with an empty object', () => {
    const result = orderByProps( {}, ["name"] );
    expect( result ).toEqual( [] );
  } );
