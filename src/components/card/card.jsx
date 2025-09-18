import style from "./card.module.css";

export default function Card({ menus }) {
  return (
    <div className={style.cardsContainer}>
      {menus.map((menu) => (
        <div key={menu.id} className={style.principalCard}>
          <div className={style.headerCard}>
            <img
              className={style.imageCard}
              src={menu.image.desktop}
              alt="product menu"
            />
            <button className={style.addCardButton}>
              <img
                src="../../../assets/images/icon-add-to-cart.svg"
                alt="add to cart"
              />
              Add to Cart
            </button>
          </div>

          <div className={style.bodyCard}>
            <p className={style.bodyCategory}>{menu.category}</p>
            <p className={style.bodyName}>{menu.name}</p>
            <p className={style.bodyPrice}>${menu.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
