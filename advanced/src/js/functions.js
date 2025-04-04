export function orderByProps( obj, order ) {
  const orderedProps      = [];
  const alphabeticalProps = [];

  for ( const prop in obj ) {
    if ( ! obj.hasOwnProperty( prop ) ) {
      continue;
    }

    const item = {key: prop, value: obj[ prop ]};

    const index = order.indexOf( prop );

    if ( index !== -1 ) {
      orderedProps[ index ] = item;
    }
    else {
      alphabeticalProps.push( item );
    }
  }

  const filteredOrderedProps = orderedProps.filter( item => item !== undefined );

  alphabeticalProps.sort( ( a, b ) => a.key.localeCompare( b.key ) );

  return [...filteredOrderedProps, ...alphabeticalProps];
}

export function extractSpecialAttacks( {special} ) {
  return special.map( ( {id, name, icon, description = 'Описание недоступно'} ) => {
    return {id, name, icon, description};
  } );
}
