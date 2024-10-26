const Product = (props) => {
  const {
    title,
    id,
    image,
    price,
    list,
    setCart,
    quantity = 0,
    cart,
    isCart = false,
  } = props;
  const handlClick = () => {
    const findProd = list.find((itm) => itm.id === id);
    const hasAdded = cart?.findIndex((itm) => itm.id === id);
    if (hasAdded === -1) cart.push(findProd);
    else cart[hasAdded].quantity += 1;
    setCart([...cart]);
  };
  const deleteProduct = () => {
    const hasAdded = cart?.findIndex((itm) => itm.id === id);
    console.log(hasAdded);
  };
  return (
    <li>
      <img src={image} alt={title} width={80} />
      <h3>{title}</h3>
      <p>{price}</p>
      {!isCart ? <button onClick={handlClick}> Add item</button> : []}
      {isCart ? (
        <>
          <button onClick={deleteProduct}> Remove item</button>
          <button>-</button>
          {quantity}
          <button>+</button>
        </>
      ) : (
        []
      )}
    </li>
  );
};
export default Product;
