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

  levelUp() {
    if ( this.health <= 0 ) {
      throw new Error( 'Нельзя повысить левел умершего' );
    }

    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage( points ) {
    if ( typeof points !== 'number' || points < 0 ) {
      throw new Error( 'Points must be a non-negative number' );
    }

    const damageTaken = points * ( 1 - this.defence / 100 );
    
    this.health = Math.max( 0, this.health - damageTaken );
  }
}
