import React, { Component } from "react";

import styles from "./newsComponents/Newscard.module.css";
import { Container } from "semantic-ui-react";

import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0,
      value: "bbc news"
    };
    this.apiUrl =
      "https://newsapi.org/v2/everything?q=climate&apiKey=611fafd7885c44668a4ee5d5785860d9";
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data.articles });
      this.setState({ count: res.data.articles.length });
      //console.log(this.state.data);
    });
  }

  render() {
    //helper function
    function findFlag(flag) {
      return `http://www.geonames.org/flags/x/${flag}.gif`;
    }

    console.log(this.state.data);

    return (
      <div className={styles.newsBody}>
        {this.state.data.map((item, y) => {
          const fixedDate = item.publishedAt.substring(
            0,
            item.publishedAt.indexOf("T")
          );

          return (
            <div key={y} className={styles.outerCard}>
              <img
                className={styles.img}
                alt={item.description}
                src={item.urlToImage}
              />
              <div className={styles.date}>
                <span className={styles.dateSpan}>{fixedDate} </span>
              </div>
              <figcaption className={styles.figCaption}>
                <h3 className={styles.h3}>{item.title} </h3>
                <p className={styles.p}>{item.description}</p>
              </figcaption>

              <div className="generalInfo">
                <h4>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
