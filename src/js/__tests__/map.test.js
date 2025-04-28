import { ErrorRepository } from '../map.js';

test('map', () => {
  const error1 = new ErrorRepository();

  error1.add(5, 'код ошибки')
  error1.add(404, 'код ошибки')
  error1.add(412, 'код ошибки')
  error1.add(5, 'код тест не добавлен')

  expect(error1.toArray()).toEqual([[5, 'код ошибки'], [404, 'код ошибки'], [412, 'код ошибки']]);

  expect(error1.translate(5)).toEqual('код ошибки')
  expect(error1.translate(6)).toEqual('Unknown error')
});
