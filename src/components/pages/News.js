import React, { Component } from "react";

import styles from "./newsComponents/Newscard.module.css";
import { Grid } from "semantic-ui-react";
import NewsCard from "./newsComponents/CardUI";
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
      console.log(this.state.data);
    });
  }

  render() {
    //helper function
    function findFlag(flag) {
      return `http://www.geonames.org/flags/x/${flag}.gif`;
    }

    //split news cards into a specific count per row
    const splitEvery = (array, count) =>
      array.reduce((result, item, index) => {
        if (index % count === 0) result.push([]);
        result[Math.floor(index / count)].push(item);
        return result;
      }, []);

    return (
      <Grid columns="equal" divided>
        {splitEvery(this.state.data, 7).map(newsChunk => (
          <Grid.Row>
            {newsChunk.map(news => (
              <Grid.Column>
                <NewsCard
                  desc={news.description}
                  title={news.title}
                  image={news.urlToImage}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    );
  }
}
