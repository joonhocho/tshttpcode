import { getHttpStatus, HttpStatus, NOT_FOUND } from './index';

test('getHttpStatus', () => {
  expect(getHttpStatus(404)).toEqual(NOT_FOUND);

  expect(HttpStatus[404]).toEqual(NOT_FOUND);

  expect(HttpStatus.not_found).toEqual(NOT_FOUND);

  expect(getHttpStatus(404)).toEqual(NOT_FOUND);

  expect(getHttpStatus('404')).toEqual(NOT_FOUND);

  expect(getHttpStatus('not_found')).toEqual(NOT_FOUND);

  expect(getHttpStatus('  not  found ')).toEqual(NOT_FOUND);

  expect(getHttpStatus(5001 as any)).toBe(undefined);

  expect(getHttpStatus('bad-name' as any)).toBe(undefined);
});
