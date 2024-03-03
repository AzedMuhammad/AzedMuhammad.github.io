import Card from "../components/Card";

const About = () => {
  return (
    <>
      <img src="./src/assets/wave.svg" alt="wave" id="Achievements" />
      <main className="container flex mx-auto achievements">
        <div className="justify-center w-full">
          <div className="w-full text-center">
            <h1 className="mb-8 text-4xl font-bold font-Poppins">
              What I achieved as a Gamer
            </h1>
          </div>
          <div className="flex flex-row justify-center font-Inter">
            <Card
              img="./src/assets/azed1.jpg"
              title="PUBG Mobile"
              desc="I play PUBG"
            />
            <Card
              img="./src/assets/azed2.jpg"
              title="Mobile Legends"
              desc="I play PUBG"
            />
            <Card
              img="./src/assets/azed3.jpg"
              title="PUBG Mobile"
              desc="I play PUBG"
            />
            <Card
              img="./src/assets/azed4.jpg"
              title="PUBG Mobile"
              desc="I play PUBG"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
