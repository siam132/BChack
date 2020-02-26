import React, { useState } from "react";

import "../scss/FAQ.scss";
import FAQData from "../data/FAQ";

function FaqQuestion(props) {
  const {
    faqItem: { Question, Answer }
  } = props;
  return (
    <div className="faq-q-and-a">
      <h3 className="faq-question">{Question}</h3>
      <p className="faq-answer">{Answer}</p>
    </div>
  );
}

function FAQ() {
  const [width] = useState(window.screen.width);

  const data = [
    FAQData[0],
    FAQData[1],
    FAQData[2],
    FAQData[3],
    FAQData[4],
    FAQData[5]
  ];

  return (
    <div id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="row">
        {data.map(faq => (
          <div className={width < 600 ? "col-12" : "col-md-6"}>
            <FaqQuestion faqItem={faq} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
