/* eslint-disable react/prop-types */
const Card = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="flex flex-col p-4">
      <div className="p-10 text-white bg-dark-green rounded-xl">
        <img
          src={img}
          alt="img"
          className="object-cover w-64 h-64 mb-6 duration-300 ease-in-out rounded-md shadow-2xl hover:scale-110"
        />
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
