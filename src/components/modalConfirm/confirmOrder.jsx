import styles from "./confirm.module.css";
export default function OrderConfirm() {
  return (
    <div className={styles.principalModal}>
      <div className={styles.modalHeader}>
        <img
          src="../../../assets/images/icon-order-confirmed.svg"
          alt="confirmed Order"
        />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
      </div>
      {/*  */}

      <div className={styles.modalDetail}>
        <img
          src="../../../assets/images/image-tiramisu-desktop.jpg"
          alt="photo menu"
        />
        <div className={styles.detailText}>
          <p>Classic Tiramisu</p>
          <p>
            1x <span>@ $5.50</span>
          </p>
        </div>
        <div className={styles.totalPrice}>
          <p>$5.50</p>
        </div>
      </div>
      <div className={styles.cartTotal}>
        <p>Order Total</p>
        <h2>$46.92</h2>
      </div>

      <div>
        <button className={styles.cartButton}>Start New Order</button>
      </div>
    </div>
  );
}
