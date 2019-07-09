const { getHttpStatus, HttpStatus, NOT_FOUND } = require('./index');

test('getHttpStatus', function() {
  expect(getHttpStatus(404)).toEqual(NOT_FOUND);

  expect(HttpStatus[404]).toEqual(NOT_FOUND);

  expect(HttpStatus.not_found).toEqual(NOT_FOUND);

  expect(getHttpStatus(404)).toEqual(NOT_FOUND);

  expect(getHttpStatus('404')).toEqual(NOT_FOUND);

  expect(getHttpStatus('not_found')).toEqual(NOT_FOUND);

  expect(getHttpStatus('  not  found ')).toEqual(NOT_FOUND);

  expect(getHttpStatus(5001)).toBe(undefined);

  expect(getHttpStatus('bad-name')).toBe(undefined);
});
