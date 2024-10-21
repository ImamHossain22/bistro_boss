import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderCard = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4 p-5 ">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    );
};

export default OrderCard;