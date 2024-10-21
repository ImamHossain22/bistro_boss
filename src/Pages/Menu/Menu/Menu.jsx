import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import drinksImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>

      <SectionTitle
        heading="Today's Offer"
        subHeading="don't miss"
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={soups} title="soup" img={soupImg}></MenuCategory>

      <MenuCategory items={salads} title="salad" img={saladImg}></MenuCategory>

      <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>

      <MenuCategory items={drinks} title="drinks" img={drinksImg}></MenuCategory>
    </div>
  );
};

export default Menu;
