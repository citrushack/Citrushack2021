import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "../styles/Accordion.module.css";

export default function AccordionComponent() {
  return (
    <Accordion
      allowMultipleExpanded
      allowZeroExpanded
      className={styles.accordion}
    >
      <AccordionItem className={styles.accordionItem}>
        <AccordionItemHeading className={styles.accordionItemHeading}>
          <AccordionItemButton className={styles.accordionItemButton}>
            What harsh truths do you prefer to ignore?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionItemPanel}>
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordionItem}>
        <AccordionItemHeading className={styles.accordionItemHeading}>
          <AccordionItemButton className={styles.accordionItemButton}>
            Is free will real or just an illusion?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionItemPanel}>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
