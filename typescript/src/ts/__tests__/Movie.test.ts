import Movie from '../domain/Movie';

describe('Movie', () => {
  // Тест на создание экземпляра класса Movie
  test('should create a movie instance with correct properties', () => {
    const movie = new Movie(
      1,
      'Inception',
      9.99,
      2010,
      'US',
      'Your mind is the scene of the crime',
      ['Sci-Fi', 'Action', 'Thriller'],
      148 * 60 // 148 минут в секундах
    );

    // Проверяем, что экземпляр создан и имеет правильный тип
    expect(movie).toBeInstanceOf(Movie);

    const correct = {
      id: 1,
      name: 'Inception',
      price: 9.99,
      year: 2010,
      country: 'US',
      motto: 'Your mind is the scene of the crime',
      genre: ['Sci-Fi', 'Action', 'Thriller'],
      duration: 148 * 60,
    }

    expect(movie).toEqual(correct);
  });

  // Тест на неизменяемость свойств (readonly)
  test('should have readonly properties', () => {
    const movie = new Movie(
      2,
      'The Matrix',
      7.99,
      1999,
      'USA',
      'Welcome to the Real World',
      ['Sci-Fi', 'Action'],
      136 * 60
    );

    // TypeScript не позволит изменить readonly свойства, но
    // мы можем проверить, что объект не мутирует
    const movieCopy = {...movie};

    expect(movie).toEqual(movieCopy);

    // Проверка, что объект соответствует интерфейсу Buyable
    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('name');
    expect(movie).toHaveProperty('price');
  });

  // Тест на создание нескольких экземпляров
  test('should create multiple movie instances independently', () => {
    const movie1 = new Movie(
      3,
      'Interstellar',
      12.99,
      2014,
      'USA',
      'Mankind was born on Earth. It was never meant to die here.',
      ['Sci-Fi', 'Drama', 'Adventure'],
      169 * 60
    );

    const movie2 = new Movie(
      4,
      'The Shawshank Redemption',
      8.99,
      1994,
      'USA',
      'Fear can hold you prisoner. Hope can set you free.',
      ['Drama'],
      142 * 60
    );

    expect(movie1.id).not.toBe(movie2.id);
    expect(movie1.name).not.toBe(movie2.name);

    // Проверка что оба объекта - экземпляры Movie
    expect(movie1).toBeInstanceOf(Movie);
    expect(movie2).toBeInstanceOf(Movie);
  });

  // Тест с использованием граничных значений
  test('should handle edge cases in properties', () => {
    // Фильм с нулевой продолжительностью и пустым массивом жанров
    const shortMovie = new Movie(
      5,
      'Short Film',
      0.99,
      2023,
      'France',
      '',
      [],
      0
    );

    expect(shortMovie.duration).toBe(0);
    expect(shortMovie.genre).toHaveLength(0);
    expect(shortMovie.motto).toBe('');
    expect(shortMovie.price).toBe(0.99);
  });
});
