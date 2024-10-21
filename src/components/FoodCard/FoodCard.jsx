


const FoodCard = ({ item }) => {

    const {name,image, price , recipe} = item;

  return (

    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="bg-amber-500 text-xl text-black font-bold w-1/6 rounded-md absolute right-0 top-1 mr-3">${price}</p>
      <div className="card-body">

        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>

      </div>

    </div>
  );
};

export default FoodCard;
