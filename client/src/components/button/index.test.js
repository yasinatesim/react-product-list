/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

const _onClick = () => {
  // eslint-disable-next-line
  console.log('this is a test');
};

describe('button component', () => {
  it('normal case', () => {
    const tree = renderer.create(<Button onClick={_onClick}>Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('no trigger event', () => {
    const tree = renderer.create(<Button>Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('no children', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
