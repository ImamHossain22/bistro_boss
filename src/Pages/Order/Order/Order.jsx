import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../OrderCard/OrderCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | order food</title>
      </Helmet>
      <Cover img={orderCover} title="Oder Now"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderCard items={salads}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={soups}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={pizzas}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={desserts}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={drinks}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
