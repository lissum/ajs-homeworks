import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';
import json from '../parser';

// Мокаем модули reader и parser, чтобы не полагаться на их фактическую реализацию (задача со звездочкой)
jest.mock( '../reader' );
jest.mock( '../parser' );

describe( 'GameSavingLoader', () => {
  let mockData;

  beforeEach( () => {
    // Подготавливаем тестовые данные
    mockData = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };

    // Настраиваем моки для функций read и json
    read.mockReturnValue( Promise.resolve( 'mock buffer' ) );
    json.mockReturnValue( Promise.resolve( JSON.stringify( mockData ) ) );
  } );

  afterEach( () => {
    jest.clearAllMocks();
  } );

  test( 'should load game saving', async () => {
    const result = await GameSavingLoader.load();

    // Проверяем, что функции read и json были вызваны
    expect( read ).toHaveBeenCalled();
    expect( json ).toHaveBeenCalledWith( 'mock buffer' );

    // Проверяем, что результат соответствует ожидаемому формату
    expect( result ).toEqual( mockData );
  } );

  test( 'should handle read errors', async () => {
    // Настраиваем read на отклонение промиса с ошибкой
    read.mockReturnValue( Promise.reject( new Error( 'Read error' ) ) );

    // Проверяем, что метод load обрабатывает ошибку
    await expect( GameSavingLoader.load() ).rejects.toThrow( 'Read error' );
  } );

  test( 'should handle json parsing errors', async () => {
    // read возвращает валидные данные
    read.mockReturnValue( Promise.resolve( 'mock buffer' ) );
    // но json выбрасывает ошибку
    json.mockReturnValue( Promise.reject( new Error( 'JSON parsing error' ) ) );

    // Проверяем, что метод load обрабатывает ошибку парсинга
    await expect( GameSavingLoader.load() ).rejects.toThrow( 'JSON parsing error' );
  } );

  test( 'should handle JSON.parse errors', async () => {
    // read и json возвращают валидные значения, но строка не является валидным JSON
    read.mockReturnValue( Promise.resolve( 'mock buffer' ) );
    json.mockReturnValue( Promise.resolve( 'invalid json' ) );

    // Проверяем, что метод load обрабатывает ошибку парсинга JSON
    await expect( GameSavingLoader.load() ).rejects.toThrow();
  } );

  test( 'should create GameSaving instance with correct data', async () => {
    const result = await GameSavingLoader.load();

    const correct = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };

    expect( result ).toEqual( correct );
  } );
} );
