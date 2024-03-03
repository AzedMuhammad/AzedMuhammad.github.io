import EducationCard from "../components/EducationCard";

const EducationAbout = () => {
  return (
    <>
      <img src="./src/assets/wave2.svg" alt="waves" />
      <div
        className="w-full h-screen bg-dark-green font-Inter"
        id="EducationAbout"
      >
        {/* About */}
        <div className="container flex flex-col justify-around h-full max-w-5xl mx-auto text-white">
          <div>
            <h1 className="mb-10 text-3xl font-semibold text-center">
              About Me
            </h1>
            <p className="mb-10">
              Hello! I am currently 22 years old and I live in Tangerang and
              currently in my 4th semester. My hobby is of course as I mentioned
              above, watching football, playing games, and of course coding in
              everyday life :D
            </p>
            <p>
              I am seeking an internship opportunity in web development to
              refine my technical skills, gain exposure to industry best
              practices, and make meaningful contributions to projects.
            </p>
          </div>

          {/* Education */}
          <div>
            <div>
              <h1 className="text-3xl font-semibold text-center text-white">
                Education
              </h1>
            </div>
            <div className="container flex justify-center mx-auto">
              <div className="flex flex-row w-full text-center">
                <EducationCard
                  schoolName="SMP Bina Insani"
                  title="Junior Highschool"
                  year="2014 - 2017"
                />
                <EducationCard
                  schoolName="SMA Bina Insani"
                  title="Senior Highschool"
                  year="2017 - 2020"
                />
                <EducationCard
                  schoolName="Universitas Muhammadiyah Tangerang"
                  title="College"
                  year="2022 - Present"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAbout;
