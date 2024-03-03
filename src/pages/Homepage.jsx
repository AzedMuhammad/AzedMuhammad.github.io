import Footer from "../components/Footer";
import About from "./About";
import EducationAbout from "./EducationAbout";
import Copyright from "../components/Copyright";

const Homepage = () => {
  return (
    <div>
      <main className="w-full bg-dark-green">
        <div className="container flex flex-row items-center justify-between h-screen mx-auto">
          <div className="text-5xl text-slate font-Inter">
            <h1 className="font-bold">Greetings!</h1>
            <h1 className="mt-2 text-3xl font-semibold">
              I`m <span className="text-cream-light">Azed</span> Muhammad Noval
            </h1>
            <p className="mt-2 text-xl font-normal">
              Front-End Dev | Football Enthusiast | Gamer
            </p>
            <div className="flex flex-row space-x-6">
              <a href="https://www.linkedin.com/in/azed-muhammad-noval-2498601b7/">
                <img
                  src="./src/assets/social/linkedin.png"
                  alt=""
                  className="h-8 mt-2 duration-300 ease-in-out hover:scale-110"
                />
              </a>
              <a href="https://www.instagram.com/azedmuhammad/">
                <img
                  src="./src/assets/social/instagram.png"
                  alt=""
                  className="h-8 mt-2 duration-300 ease-in-out hover:scale-110"
                />
              </a>
              <a href="https://github.com/azedmuhammad">
                <img
                  src="./src/assets/social/github.png"
                  alt=""
                  className="h-8 mt-2 duration-300 ease-in-out hover:scale-110"
                />
              </a>
            </div>
          </div>
          <img src="./src/assets/GOJOGETO.jpg" alt="anime" className="h-52" />
        </div>
      </main>

      <About />
      <EducationAbout />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Homepage;
