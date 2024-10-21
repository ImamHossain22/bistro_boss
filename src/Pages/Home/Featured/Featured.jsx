import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="bg-fixed featured-img my-3">
      <SectionTitle
        subHeading="check it out"
        heading="Featured item"
      ></SectionTitle>
      <div >
        <div className="flex items-center justify-center p-20 gap-12">
          <img className="p-5 w-[640px]" src={featuredImg} alt="" />
          <div>
            <p>March 20, 2023.</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
