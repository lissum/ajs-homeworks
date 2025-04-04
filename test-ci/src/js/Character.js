export default class Character {
  constructor( name, type ) {
    // Проверка имени
    if ( typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
      throw new Error( 'Name must be a string between 2 and 10 characters' );
    }

    // Допустимые типы
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if ( ! validTypes.includes( type ) ) {
      throw new Error( 'Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie' );
    }

    this.name   = name;
    this.type   = type;
    this.health = 100;
    this.level  = 1;
  }
}
