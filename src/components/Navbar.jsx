const Navbar = () => {
  return (
    <>
      <div className="fixed min-w-full">
        <div className="flex p-6 m-auto mt-4 text-xl text-white rounded-full shadow-2xl backdrop-blur-md font-Inter w-fit">
          <ul className="flex space-x-10">
            <li className="duration-300 hover:scale-105">
              <a href="/">Home</a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="#Achievements">Achievements</a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="#EducationAbout">About</a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="#footer">Techstack</a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
