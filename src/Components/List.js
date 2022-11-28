function List({ items }) {
    const [qty, setQty] = useState();
    // console.log(items);
  
    const decrease = () => {
      if (qty > 1) {
        setQty((prev) => prev - 1);
      }
    };
    const increase = () => {
      setQty((prev) => prev + 1);
    };
  
    const totalPrice = qty * items.price;
    const cartItems = useSelector((state) => state.cart);
  
    console.log(cartItems);
  
    const dispatch = useDispatch();
    const addToCartHandler = () => {
      dispatch(cartActions.addToCart({ ...items, qty, totalPrice }));
    };
  
    return (
      <div className="ticket_body">
        <div>
          <p>
            {items.name}
            <span>₦{items.price}</span>
          </p>
        </div>
  
        <div>
          <Button ticket="Book Tickets" />
        </div>
      </div>
    );
  };
  