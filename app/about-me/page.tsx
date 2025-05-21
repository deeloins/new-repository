"use client";
import Image from "next/image";
import "../styling/bits.css";
import Lty from "../images/companiesLogo (1).png";
import kawts from "../images/companiesLogo (3).png";
import thenod from "../images/companiesLogo (2).png";
import tantalizer from "../images/companiesLogo (4).png";
import { useState, useEffect } from "react";
import picture1 from "../images/mrLawal_(1).png";
import picture2 from "../images/mrLawal_(2).png";
import picture4 from "../images/mrLawal_(4).png";
import picture5 from "../images/mrLawal_(5).png";
import picture6 from "../images/mrLawal_(6).png";
import picture7 from "../images/mrLawal_(7).png";
import picture8 from "../images/mrLawal_(8).png";
import picture9 from "../images/mrLawal_(9).png";
import picture10 from "../images/mrLawal_(10).png";
import picture11 from "../images/mrLawal_(11).png";

function Slider() {
  const images = [
    { src: picture1, width: 500, height: 500 },
    { src: picture2, width: 500, height: 500 },
    { src: picture4, width: 500, height: 500 },
    { src: picture5, width: 500, height: 500 },
    { src: picture6, width: 500, height: 500 },
    { src: picture7, width: 500, height: 500 },
    { src: picture8, width: 500, height: 500 },
    { src: picture9, width: 500, height: 500 },
    { src: picture10, width: 500, height: 500 },
    { src: picture11, width: 500, height: 500 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalTimer);
  }, [images.length]);

  return (
    <div className="imageSlider">
      <Image
        src={images[index].src}
        width={images[index].width}
        height={images[index].height}
        className="image"
        alt="Portfolio image"
        priority
      />
    </div>
  );
}

function Experience() {
  return (
    <div className="p-3.5 w-90 border-[0.1rem] border-[#3b3a3a] rounded-xl bg-[#1f1c1c] experienceSection">
      <h2 className="text-left">Experience</h2>

      <section className="pt-5">
        <div className="flex gap-10 pb-3 experience">
          <div className="text-[#645d5d]">2024 - Now</div>
          <div className="text-left">
            <h2>Product Designer</h2>
            <div className="flex text-[#645d5d]">
              Stringify Consulting
              <button className="remote">Remote</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 pb-3 experience">
          <div className="text-[#645d5d]">2023 - 2024</div>
          <div className="text-left">
            <h2>Intern Product Designer</h2>
            <div className="flex text-[#645d5d] remotebtnflex">
              Fiducia Data Service
              <button className="remote">Hybrid</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 pb-3 experience">
          <div className="text-[#645d5d]">2022 - 2023</div>
          <div className="text-left">
            <h2>Intern Product Designer</h2>
            <div className="flex text-[#645d5d]">
              Handiworker Tech
              <button className="remote">Remote</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="h-0.5 mt-4 mb-4 divider" />

      <section className="companyDiv">
        <span className="text-[#645d5d]">
          Companies I&apos;ve collaborated with
        </span>
        <div className="flex gap-9 mt-3.5 companylogos">
          <Image src={Lty} alt="Lty logo" width={50} height={50} className="logo" />
          <Image src={kawts} alt="Kawts logo" width={50} height={50} className="logo" />
          <Image src={thenod} alt="Thenod logo" width={50} height={50} className="logo" />
          <Image src={tantalizer} alt="Tantalizer logo" width={50} height={50} className="logo" />
        </div>
      </section>
    </div>
  );
}

function Education() {
  return (
    <div className="p-5 w-90 border-[0.1rem] border-[#3b3a3a] rounded-xl bg-[#1f1c1c] experienceSection">
      <h2 className="text-left pt-2.5">EDUCATION/CERTIFICATION</h2>

      <section className="pt-5">
        <div className="flex gap-5 pb-3 education">
          <div className="text-[#3b3a3a]">2016 - 2019</div>
          <div className="text-left">
            <h2>B.Sc (Ed)Computer Science</h2>
            <div className="flex text-[#3b3a3a]">
              University of Nigeria, Nsukka
            </div>
          </div>
        </div>

        <div className="flex gap-18 pb-3 education">
          <div className="text-[#3b3a3a]">2024</div>
          <div className="text-left">
            <h2>
              Figma UI UX Design <br /> Advanced
            </h2>
            <div className="flex text-[#3b3a3a]">
              Udemy &bull; Daniel Walter Scott
            </div>
          </div>
        </div>

        <div className="flex gap-18 pb-3 education">
          <div className="text-[#3b3a3a]">2024</div>
          <div className="text-left">
            <h2>User Experience Design Fundamentals</h2>
            <div className="flex text-[#3b3a3a]">Udemy &bull; Joe Natoli</div>
          </div>
        </div>

        <div className="flex gap-18 pb-3 education">
          <div className="text-[#3b3a3a]">2024</div>
          <div className="text-left">
            <h2>Google UX Design</h2>
            <div className="flex text-[#3b3a3a]">Coursera</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-y-6 justify-center items-center mt-8 aboutMe">
      <Slider />
      <Experience />
      <Education />
    </section>
  );
}
