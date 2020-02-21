// @ts-check
import React from "react";
import FAQData from "../data/FAQ";
import "../scss/FAQ.scss";

function FaqQuestion(props) {
  return (
    <div className="faq-q-and-a">
      <h3 className="faq-question">
        {FAQData[props.questionNumber].Question}
      </h3>
      <p className="faq-answer">
        {FAQData[props.questionNumber].Answer}
      </p>
    </div>
  );
}

function FAQ() {
  return (
    <div id="faq" className="row">
      <h2 className="col-12 text-center">Frequently Asked Questions</h2>
        {/* left */}
        <div className="col">
          <FaqQuestion questionNumber={0} />
          <FaqQuestion questionNumber={2} />
          <FaqQuestion questionNumber={4} />
        </div>
        {/* right */}
        <div className="col">
          <FaqQuestion questionNumber={1} />
          <FaqQuestion questionNumber={3} />
        </div>
    </div>
  );
}

export default FAQ;
