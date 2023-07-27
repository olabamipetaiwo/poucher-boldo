/* eslint-disable @next/next/no-img-element */
import Mark from "assets/svgs/drop.svg";
import { useState } from "react";

import { useRef } from "react";

const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="accordion-btn" onClick={handleToggle}>
        {question}
        <Mark />
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer">{answer}</p>
      </div>
    </li>
  );
};

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "Dignissimos sequi architecto?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "Voluptas praesentium facere?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];

const FAQs = () => {
  return (
    <section className="fit-x-bleed flex flex-col py-32">
      <figure className="w-full rounded-3xl overflow-hidden mb-14">
        <img className=" object-fill " src="/images/office.png" alt="office" />
      </figure>
      <div className="grid grid-cols-1 tab:grid-cols-2 gap-10">
        <p className="font-body text-4xl leading-[56px] text-black;">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="flex flex-col">
          <ul className="accordion list-none">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
