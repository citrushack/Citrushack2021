import React, { Component } from 'react'
import FaqSection from "./FaqSection.js";
import styles from "../styles/Accordion.module.css";

export default class Accordion extends Component {
  render() {
    return (
      <div className={styles.accordion}>
        <FaqSection
          question="What is a hackathon?"
          answer="A hackathon is an event where teams or inviduals rush to make a creative project. Throughout, there will be free workshops intended to guide you in creating your project. At the end of the time slot, contestants have the oppurtunity to demo their projects to judges and win prizes."
        />
        <FaqSection
          question="Where will we submit?"
          answer="You can submit through Devpost. Further instructions will follow on the day-of the event."
        />
        <FaqSection
          question="Can I submit a project I’ve already worked on?"
          answer="No, you must start working on project code after hacking starts at 8 AM. Projects started before that time or have been submitted to other hackathons will be disqualified. Make sure your submission is unique to Citrus Hack!"
        />
        <FaqSection
          question="How long is Citrus Hack?"
          answer="Citrus Hack 2021 will be a 36-hour hackathon. Hacking will start at 10 PM (PDT) on Friday (April 9th) and end at 10 AM (PDT) on Sunday, April 11th. The closing ceremony will be held at 1 PM through."
        />
        <FaqSection question="Is Citrus Hack free?" answer="Yes!" />
        <FaqSection
          question="Who can come to Citrus Hack?"
          answer="Any undergraduate student enrolled in a college can participate, regardless of major. High school students are welcome as well."
        />
        <FaqSection
          question="When are applications due?"
          answer="Applications will be accepted on a rolling basis but will close on April 4th."
        />
        <FaqSection
          question="My question isn't listed!"
          answer="Email us at citrushack@gmail.com and we can answer your questions"
        />
        <FaqSection
          question="What if I’ve never been to a hackathon before?"
          answer="That’s the best reason to come out! Citrus Hack is open to people of all skill-levels. We’ll be having beginner-oriented workshops and activities, along with mentors to help you turn your project into reality."
        />
        <FaqSection
          question="What will I need to participate?"
          answer="A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you."
        />
        <FaqSection
          question="What if I don’t have a team?"
          answer="If you don’t have a team formed prior to Citrus Hack, we will have a channel on Discord where you can find other participants that share similar interests. We’ll also be providing activities at the beginning of the event to help you form teams. Teams aren’t required though, so feel free to work individually."
        />
        <FaqSection
          question="Do I have to hack or make a project?"
          answer="Not at all! You can attend a workshop just to learn, network with fellow hackers, and participate in games and raffles. You’ll be able to find the schedule on our website as we get closer to the event."
        />
        <FaqSection
          question="If I’m residing outside of the U.S, can I still attend and/or win a prize?"
          answer="Those outside of the US can still attend, compete, and win. However, due to shipping restrictions and COVID, we won’t be able to send any physical items to those residing outside of the U.S."
          />
      </div>
    );
  }
  
}
