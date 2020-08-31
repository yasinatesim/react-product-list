/* eslint-disable */

import priceFormat from './index';

describe('proice format helper', () => {
  test('integer price', () => {
    expect(priceFormat(767, 'USD')).toBeTruthy();
  });

  test('integer price', () => {
    expect(priceFormat(767.82, 'USD')).toBeTruthy();
  });

  test('string price', () => {
    expect(priceFormat('767', 'USD')).toBeTruthy();
  });

  test('integer price without curremcy', () => {
    expect(priceFormat(767)).toBeTruthy();
  });

  test('integer price without curremcy', () => {
    expect(priceFormat(767.82)).toBeTruthy();
  });

  test('string price without curremcy', () => {
    expect(priceFormat('767')).toBeTruthy();
  });
});
