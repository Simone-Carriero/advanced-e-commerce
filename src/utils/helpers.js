export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (products, category) => {
  let val = products.map((product) => product[category]);
  if (category === 'colors') {
    val = val.flat();
  }
  return ['all', ...new Set(val)];
};
