import { getHttpStatus, HttpStatus, INTERNAL_SERVER_ERROR } from './index';

test('getHttpStatus', () => {
  expect(getHttpStatus(500)).toEqual(INTERNAL_SERVER_ERROR);
  expect(HttpStatus[500]).toEqual(INTERNAL_SERVER_ERROR);
  expect(HttpStatus.INTERNAL_SERVER_ERROR).toEqual(INTERNAL_SERVER_ERROR);
  expect(getHttpStatus('INTERNAL_SERVER_ERROR')).toEqual(INTERNAL_SERVER_ERROR);
  expect(getHttpStatus('  internal server  error ')).toEqual(
    INTERNAL_SERVER_ERROR
  );
  expect(getHttpStatus(5001 as any)).toBe(undefined);
  expect(getHttpStatus('bad-name' as any)).toBe(undefined);
});
