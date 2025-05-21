"use client";

import ToolStack from "../../components/Toolstack";

const ToolStackPage = () => {
  const tools = [
    { name: "Figma", image: "/assets/figma.png", border: "" },
    {
      name: "SurveyMonkey",
      image: "/assets/tools2.png",
      border: "linear-gradient(...)",
    },
    {
      name: "Google Meet",
      image: "/assets/tools3.png",
      border: "linear-gradient(...)",
    },
    {
      name: "Trello",
      image: "/assets/tools4.png",
      border: "linear-gradient(...)",
    },
    { name: "Miro", image: "/assets/tools5.png", border: "" },
    { name: "Spline", image: "/assets/tools6.png", border: "" },
    {
      name: "Goodnotes",
      image: "/assets/tools7.png",
      border: "linear-gradient(...)",
    },
    {
      name: "Useberry",
      image: "/assets/tools8.png",
      border: "linear-gradient(...)",
    },
    {
      name: "Google Analytics",
      image: "/assets/tools9.png",
      border: "linear-gradient(...)",
    },
  ];

  return (
    <div className="">
      <ToolStack tools={tools} />
    </div>
  );
};

export default ToolStackPage;
