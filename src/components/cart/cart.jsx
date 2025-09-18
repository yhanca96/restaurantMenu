import style from "./cart.module.css";
export default function Cart() {
  return (
    <div className={style.principalCart}>
      <h1>Your Cart (7)</h1>

      <div className={style.cartDetail}>
        <div className={style.cartName}>
          <p>Classic Tiramisu</p>
          <div className={style.cartPrice}>
            <p>1x</p>
            <p>@$5.50</p>
            <p>$5.50</p>
          </div>
        </div>
        <div>
          <button className={style.cartDelete}>
            <img src="../../../assets/images/icon-remove-item.svg" alt="" />
          </button>
        </div>
      </div>

      <div className={style.cartTotal}>
        <p>Order Total</p>
        <h2>$46.92</h2>
      </div>
      <div className={style.message}>
        <img src="../../../assets/images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <div>
        <button className={style.cartButton}>Confirm Order</button>
      </div>
    </div>
  );
}
