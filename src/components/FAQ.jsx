// @ts-check
import React from "react";
import FAQData from "../data/FAQ";

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
    <div className="container-fluid">
      <div className="row" id="faq">
        <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="col-sm left-column" >
            <FaqQuestion questionNumber={0} />
            <FaqQuestion questionNumber={2} />
            <FaqQuestion questionNumber={4} />
          </div>
          <div className="col-sm right-column">
            <FaqQuestion questionNumber={1} />
            <FaqQuestion questionNumber={3} />
          </div>
      </div>
    </div>
  );
}

export default FAQ;
