/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import ProductItem from './index';

describe('product item component', () => {
  it('normal case', () => {
    const tree = renderer
      .create(
        <ProductItem
          key={'3782683247'}
          id={'3782683247'}
          name="Test product"
          image="test url"
          price={278.93}
          url="test url"
          cargoType={'1'}
          cargoName="Ucretsiz Kargo"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with integer "id", "key" and "cargoType" values', () => {
    const tree = renderer
      .create(
        <ProductItem
          key={3782683247}
          id={3782683247}
          name="Test product"
          image="test url"
          price={278.93}
          url="test url"
          cargoType={1}
          cargoName="Ucretsiz Kargo"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with liked true', () => {
    const tree = renderer
      .create(
        <ProductItem
          key={3782683247}
          id={3782683247}
          name="Test product"
          image="test url"
          price={278.93}
          url="test url"
          cargoType={1}
          cargoName="Ucretsiz Kargo"
          liked
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
