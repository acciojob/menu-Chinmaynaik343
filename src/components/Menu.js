
import React, { useState } from "react";

const initialMenu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
    desc: "Fluffy pancakes served with syrup and fresh fruit."
  },
  {
    id: 2,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500",
    desc: "A delicious breakfast to start your day."
  },
  {
    id: 3,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    desc: "A hearty breakfast with delicious ingredients."
  },
  {
    id: 4,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    desc: "A double burger with fresh vegetables and sauce."
  },
  {
    id: 5,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    desc: "A classic burger served with fresh toppings."
  },
  {
    id: 6,
    title: "Egg Attack",
    category: "Lunch",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    desc: "A tasty sandwich made with eggs and vegetables."
  },
  {
    id: 7,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    desc: "A creamy milkshake topped with delicious treats."
  },
  {
    id: 8,
    title: "Oreo Dream",
    category: "Shakes",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500",
    desc: "A rich chocolate and cookie milkshake."
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 7.99,
    img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500",
    desc: "A refreshing, creamy shake for any time of day."
  }
];

function Menu() {
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setMenuItems(initialMenu);
    } else {
      setMenuItems(
        initialMenu.filter((item) => item.category === category)
      );
    }
  };

  return (
    <section className="menu">
      <header className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>

      <div className="btn-container">
        <button
          id="filter-btn-all"
          className={activeCategory === "All" ? "filter-btn active" : "filter-btn"}
          onClick={() => filterItems("All")}
        >
          All
        </button>

        <button
          id="filter-btn-1"
          className={activeCategory === "Breakfast" ? "filter-btn active" : "filter-btn"}
          onClick={() => filterItems("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          className={activeCategory === "Lunch" ? "filter-btn active" : "filter-btn"}
          onClick={() => filterItems("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          className={activeCategory === "Shakes" ? "filter-btn active" : "filter-btn"}
          onClick={() => filterItems("Shakes")}
        >
          Shakes
        </button>
      </div>

      <div className="section-center">
        {menuItems.map((item) => {
          const categoryTestId =
            item.category === "Breakfast"
              ? "menu-item-breakfast"
              : item.category === "Lunch"
              ? "menu-item-lunch"
              : "menu-item-shakes";

          return (
            <article
              className="menu-item"
              key={item.id}
              data-test-id={categoryTestId}
            >
              <img
                src={item.img}
                alt={item.title}
                className="photo"
              />

              <div className="item-info">
                <header>
                  <h4>{item.title}</h4>
                  <h4 className="price">
                    ${item.price.toFixed(2)}
                  </h4>
                </header>

                <p className="item-text">{item.desc}</p>
                <p className="category">{item.category}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
