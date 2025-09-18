import { menus } from "../../data.json";
import Card from "../components/card/card";
import Cart from "../components/cart/cart";
import styles from "./menu.module.css";
export default function Principal() {
  return (
    <div>
      <nav>
        <h1>Desserts</h1>
      </nav>
      <div className={styles.principalContainer}>
        <div className={styles.cardContainer}>
          <Card menus={menus} />
        </div>
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      </div>
    </div>
  );
}
