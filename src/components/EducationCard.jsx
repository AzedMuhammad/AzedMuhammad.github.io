/* eslint-disable no-unused-vars */
const Education = (props) => {
  // eslint-disable-next-line react/prop-types
  const { year, title, schoolName } = props;
  return (
    <>
      <div className="container flex flex-col mx-auto my-12 text-white font-Inter">
        <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
        <h2 className="text-xl font-normal">{schoolName}</h2>
        <p className="text-sm">{year}</p>
      </div>
    </>
  );
};

export default Education;
