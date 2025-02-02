const {
  products,
  numberOfItemsInCart,
} = state;

ReactDOM.render(
    <App 
      numberOfItemsInCart = {state.numberOfItemsInCart}
      products={state.products}
    />,
    document.getElementById("root"));
