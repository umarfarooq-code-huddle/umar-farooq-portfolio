import Header from "./Header";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Services() {
  const [cards, setCards] = useState([
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/178199ac4f9911aeb7935a04ffa23b394716176f-400x400.gif",
      title: "Web Application Development",
      desc: "Code Huddle builds cost-effective and scalable web application solutions that are easily maintainable and feasible.",
    },
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/f43fa9d5069c408699a3a2e42754fafc2a80b23d-400x400.gif",
      title: "Mobile Application Development",
      desc: "Our experts are capable of building high-end, hybrid, native, and cross-platform applications for both iOS and Android.",
    },
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/12ac589cf01bda3628f53cd005760f91cb2b8b25-400x400.gif",
      title: "Software Quality Assurance",
      desc: "No defect goes unnoticed. QA experts at Code Huddle help startups perfect their software solutions, detecting all major and minor defects in their product.",
    },
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/178199ac4f9911aeb7935a04ffa23b394716176f-400x400.gif",
      title: "UI & UX Design",
      desc: "Our UI&UX design services are technically researched to make your complex products seem easy, and drive the growth you need for your brand to standout.",
    },
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/24c89905832cdce40f8f0617c5090380157d397e-400x400.gif",
      title: "Staff Augmentation",
      desc: "Code Huddle adopts a strict internal recruitment and training process when facilitating other organisations, especially when it comes to achieving business objectives.",
    },
    {
      imgSrc:
        "https://cdn.sanity.io/images/jpbggf1w/production/ec985890c3475f3a7e7ec74d04247b91073fac1c-400x400.gif",
      title: "MVP Development",
      desc: "Visually test the market trends with Code Huddle's Minimum Viable Product Services (MVPS), designed specially for early-stage startups and SMEs in the industry.",
    },
  ]);

    // const [showForm, setShowForm] = useState(false);
  // const [taskTitle, setTaskTitle] = useState("");
  // const [taskDescription, setTaskDescription] = useState("");




  // const handlePlusClick = () => {
  //   console.log("Here");
  //   setShowForm(true);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can handle the submission of the form data, for example, by sending it to a server or saving it in the local state.
  //   // For simplicity, we'll just log the data to the console.
  //   console.log("Task Title:", taskTitle);
  //   console.log("Task Description:", taskDescription);

  //   setCards([...cards,{title:taskTitle,desc:taskDescription}])
  //   // Reset the form values
  //   setTaskTitle("");
  //   setTaskDescription("");
  //   // Hide the form after submission
  //   setShowForm(false);
  // };

  return (
    <div className="ml-16 flex flex-wrap">
      {cards.map((card) => (
        <Card
          title={card.title}
          key={card.title}
          desc={card.desc}
          imgSrc={card.imgSrc}
        ></Card>
      ))}

           {/* <CardAdding onClick={handlePlusClick}></CardAdding> */}

        {/* Pop-up form */}
        {/* {showForm && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md">
            <form
              className="bg-white dark:bg-black  p-8 rounded-lg shadow-lg w-96"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
              <div className="mb-4">
                <label htmlFor="taskTitle" className="block font-medium mb-1">
                  Task Title:
                </label>
                <input
                  type="text"
                  id="taskTitle"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="taskDescription"
                  className="block font-medium mb-1"
                >
                  Task Description:
                </label>
                <textarea
                  id="taskDescription"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="ml-4 px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )} */}
    </div>
  );
}
