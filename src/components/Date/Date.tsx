import { Component } from "react";
import styles from "./Date.module.css";
import moment from "moment";

class Date extends Component {
  //Class component
  date = moment().format("D");
  date_month = moment().format("MMM");
  date_year = moment().format("YYYY");
  day = moment().format("dddd");
  render() {
    return (
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.date}>{this.date}</div>
          <div className={styles.date_month_year}>
            <div className={styles.date_month}>{this.date_month}</div>
            <div className={styles.date_year}>{this.date_year}</div>
          </div>
        </div>
        <div className={styles.div3}>{this.day}</div>
      </div>
    );
  }
}
export default Date;
