/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Title from './index';

describe('title component', () => {
  it('normal case', () => {
    const tree = renderer.create(<Title>Text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('no children', () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
