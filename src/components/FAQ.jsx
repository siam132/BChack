import React from "react";
import FAQData from "../data/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <div className="container-fluid">
      <div className="row" id="faq">
        <h1>FAQ</h1>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 py-4">
          {FAQData.map(e => {
            return <FaqRenderer question={e.Question} answer={e.Answer} />;
          })}
        </div>
        
      </div>
    </div>
  );
}

function FaqRenderer(props) {
  return (
    <Accordion allowZeroExpanded={"true"}>
      <AccordionItem>
        <AccordionItemHeading className="accordion__heading">
          <AccordionItemButton className="h3 py-4 accordion__button">
            {props.question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="haccordion__panel h4">
          <p>{props.answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQ;
