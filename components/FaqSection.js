import React, { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import styles from "../styles/Accordion.module.css";

export default class FaqSection extends Component {
    state = {
      open : false
    }

    Toggle = () => {
      this.setState ({
        open : !this.state.open
      })
    }

    render() {
      return (
        <div className={(this.state.open ? `${styles.accordionItem} ${styles.open}` : `${styles.accordionItem}`)} onClick={() => this.Toggle()}>
          <div className={styles.accordionItemHeading}>
            <div className={styles.accordionItemButton}>
              <p>{this.props.question}</p> <FaPlus />
            </div>
          </div>
          <div className={styles.accordionItemPanel}>
            <p className={styles.answer}>{this.props.answer}</p>
          </div>
        </div>
      );
    }
    
  };