import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.webp"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Zain Ali</p>
            <p className="subtext">
              <span style={{ color: "white" }}>
              Seasoned Full Stack Engineer (6+ years) specializing in MERN stack and Python, 
              with expertise in designing and deploying scalable, high-performance web applications 
              focused on optimization, security, and cross-functional goal alignment.
              </span>
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="JavaScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="TypeScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="C & C++"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Tech Solutions"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/nodejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "35%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "45%" }}
              image="assets/logos/django.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "15%", left: "25%" }}
              image="assets/logos/mongo.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "45%", left: "5%" }}
              image="assets/logos/sequelize.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "65%", left: "85%" }}
              image="assets/logos/sql.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "85%" }}
              image="assets/logos/possql.svg"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/angular.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              <span style={{ color: "white" }}>
                  I'm based in Lahore, and open to remote and hybrid work worldwide.
              </span>
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%]">
          <p className="headText">Tech Stack</p>
          <p className="subtext">
            <span style={{ color: "white" }}>
              My skill set includes JavaScript, TypeScript, 
              Python, Go, C/C++, React, Next.js, Angular, Node.js, Django, Flask, MongoDB, SQL, 
              and PostgreSQL, complemented by expertise in cloud and DevOps with AWS, Docker, 
              Kubernetes, Terraform, and CI/CD pipelines.
            </span>
          </p>
        </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;