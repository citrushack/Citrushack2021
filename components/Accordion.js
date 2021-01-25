import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

import styles from "../styles/Accordion.module.css";

const FaqSection = ({ question, answer }) => {
  return (
    <AccordionItem className={styles.accordionItem}>
      <AccordionItemHeading className={styles.accordionItemHeading}>
        <AccordionItemButton className={styles.accordionItemButton}>
          {question} <FaChevronDown/>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={styles.accordionItemPanel}>
        <p>{answer}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default function AccordionComponent() {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <FaqSection
        question="What is a hackathon?"
        answer="A hackathon is an event where you can build a project and demo to judges in order to win awesome prizes! We offer cool workshops to help you learn about new technologies or new programming languages as well!"
      />
      <FaqSection
        question="Where will we submit?"
        answer="You can submit through Devpost! Further instructions will follow on the day-of the event."
      />
      <FaqSection
        question="Can I submit a project I’ve already worked on?"
        answer="No, you must start working on a project (code-wise) after hacking starts at 8 AM. Projects started before that time will be disqualified along with projects that have been submitted to other hackathons. Make sure your submission is unique to Citrus Hack!"
      />
      <FaqSection
        question="How long is Citrus Hack?"
        answer="Citrus Hack 2021 will be a 36-hour hackathon. Hacking will start at 10 PM (PDT) on Friday (April 9th) and end at 10 AM (PDT) on Sunday, April 11th. The closing ceremony will be held at 1 PM through."
      />
      <FaqSection question="Is Citrus Hack free?" answer="Yes!" />
      <FaqSection
        question="Who can come to Citrus Hack?"
        answer="Any undergraduate students enrolled in a college can participate, regardless of majors. High school students are welcome as well!"
      />
      <FaqSection
        question="When are applications due?"
        answer="Applications will be accepted on a rolling basis but will close on April 4th!"
      />
      <FaqSection
        question="My question is not listed?"
        answer="Email us at citrushack@gmail.com and we can answer your questions!"
      />
      <FaqSection
        question="What if I’ve never been to a hackathon before?"
        answer="That’s the best reason to come out! Citrus Hack is open to people of all skill-levels! We’ll be having beginner-oriented workshops and activities, along with mentors to help you turn your project into reality!"
      />
      <FaqSection
        question="What will I need to participate?"
        answer="A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you!"
      />
      <FaqSection
        question="What if I don’t have a team?"
        answer="If you don’t have a team formed prior to Citrus Hack, we will be having a channel on Discord where you can find other participants that share similar interests! We’ll also be providing activities at the beginning of the event to help you form teams! Teams aren’t required though, so feel free to work individually."
      />
      <FaqSection
        question="Do I have to hack or make a project?"
        answer="Not at all! We’ll be hosting workshops for you to learn from, events and activities to help you network with others, and games for you to meet other hackers. Don’t forget about the raffles! You’ll be able to find the schedule on our website as we get closer to the event. "
      />
      <FaqSection
        question="If I’m residing outside of the U.S, can I still attend and/or win a prize/raffle?"
        answer="If you’re residing outside of the U.S, you can still attend! However, due to shipping restrictions and COVID, we won’t be able to send any type of physical prizes,  swag items, or raffle prizes to those residing outside of the U.S. You are still eligible to win a category, however!
      If you currently attend a university within the U.S but reside outside of the U.S, you’ll be able to win a category but will not be eligible to receive a physical prize, swag item, or raffle prize. 
      If you both attend a university outside of the U.S and also reside outside of the U.S, you will e ineligible to win or receive a prize, but are still encouraged to attend and participate in all festivities!
    "
      />
    </Accordion>
  );
}
