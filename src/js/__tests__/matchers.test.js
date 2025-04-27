  import getMatchers from '../matchers.js';
  
  test('arrayPersons', () => {
    const result = getMatchers([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 50},
      ]);
  
    expect(result).toEqual(['healthy','wounded','critical']);
  });
  