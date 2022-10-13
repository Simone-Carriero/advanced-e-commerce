import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (!grid_view) return <ListView products={products} />;
  return (
    <section>
      <GridView products={products} />
    </section>
  );
};

export default ProductList;
