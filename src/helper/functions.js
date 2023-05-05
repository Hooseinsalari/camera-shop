const truncate = (str) => {
  if (str.length > 25) {
    return str.substring(0, 40) + " ...";
  }
};

const sumItems = (items) => {
  const itemCounter = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.attributes.price,
    0
  );

  return { itemCounter, totalPrice };
};

export { truncate, sumItems };
