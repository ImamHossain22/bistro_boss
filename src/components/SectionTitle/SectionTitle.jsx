

const SectionTitle = ({heading , subHeading}) => {

    return (
        <div className="text-center md:w-4/12 mx-auto my-4">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 my-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;