import style from "./card.module.css";
export default function Card({ image, category, name, price }) {
  return (
    <div className={style.principalCard}>
      <div className={style.headerCard}>
        <img className={style.imageCard} src={image} alt="product menu" />
        <button className={style.addCardButton}>
          <img
            src="../../../assets/images/icon-add-to-cart.svg"
            alt="add to cart"
          />
          Add to Cart
        </button>
      </div>

      <div className={style.bodyCard}>
        <p className={style.bodyCategory}>{category}</p>
        <p className={style.bodyName}>{name}</p>
        <p className={style.bodyPrice}>${price}</p>
      </div>
    </div>
  );
}
