/* eslint-disable quote-props */
import Validator from '../app';

test('validation', () => {
  const validator = new Validator();

  const expected = {
    'alabama': true,
    'ALABAMA': true,
    '0alabama': false,
    'alabama0': false,
    'alab0000ama': false,
    'alab----ama': true,
    'alab____ama': true,
    'alabaaaaama': true,
  };
  const recieved = {
    'alabama': validator.validateUsername('alabama'),
    'ALABAMA': validator.validateUsername('ALABAMA'),
    '0alabama': validator.validateUsername('0alabama'),
    'alabama0': validator.validateUsername('alabama0'),
    'alab0000ama': validator.validateUsername('alab0000ama'),
    'alab----ama': validator.validateUsername('alab----ama'),
    'alab____ama': validator.validateUsername('alab____ama'),
    'alabaaaaama': validator.validateUsername('alabaaaaama'),
  };
  expect(expected).toEqual(recieved);
});
