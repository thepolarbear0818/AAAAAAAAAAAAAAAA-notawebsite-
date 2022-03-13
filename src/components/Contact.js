import React from "react";

const Contact = () => {
  const sections = [
    {
      name: "Henry",
      content:
        "duh",
    },
    {
      name: "Phone",
      content:
        "please do not contact me",
    },
  ];

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className=" w-xl flex flex-col items-start space-y-4 border-white text-black rounded-xl px-4 py-8  shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;