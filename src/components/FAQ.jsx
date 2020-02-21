// @ts-check
import React from "react";
import FAQData from "../data/FAQ";
import "../scss/FAQ.scss";

function FaqQuestion(props) {
  const { faqItem: { Question, Answer } } = props;
  return (
    <div className="faq-q-and-a">
      <h3 className="faq-question">
        {Question}
      </h3>
      <p className="faq-answer">
        {Answer}
      </p>
    </div>
  );
}

function FAQ() {
  // reorder
  const data = [
    FAQData[0],
    FAQData[1],
    FAQData[2],
    FAQData[3],
    FAQData[4]
  ];
  return (
    <div id="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="row">
        {data.map((faq) => 
        <div className="col-lg-6 col-sm-12">
          <FaqQuestion faqItem={faq} />
        </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
