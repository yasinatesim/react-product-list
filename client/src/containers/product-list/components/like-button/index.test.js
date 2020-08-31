/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import LikeButton from './index';

// Other components
import { CargoIcon } from '../../../../icons';

describe('like button component', () => {
  it('with other component case', () => {
    const tree = renderer.create(<LikeButton>
      <CargoIcon />
      <span>test</span>
    </LikeButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('liked status', () => {
    const tree = renderer.create(<LikeButton liked>Content</LikeButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with product id type of integer', () => {
    const tree = renderer.create(<LikeButton productId={68731727}>Content</LikeButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with product id type of string', () => {
    const tree = renderer.create(<LikeButton productId="68731727">Content</LikeButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('no children', () => {
    const tree = renderer.create(<LikeButton>Content</LikeButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
