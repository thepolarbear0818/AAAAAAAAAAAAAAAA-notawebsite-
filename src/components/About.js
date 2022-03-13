import React from "react";

const About = () => {
  const sections = [
    {
      name: "School",
      content:
        "dfgsdfgsdfgsdfgsdfgsdfgsdfg",
    },
    {
      name: "Hobbies",
      content:
        "wsfghdlfhgsdkfjgsdfh",
    },
  ];

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className=" w-full flex flex-col items-start space-y-4  border-white text-black rounded-xl px-4 py-8 max-w-xl shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;