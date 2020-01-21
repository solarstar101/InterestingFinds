import React, { Component } from "react";

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
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data.articles });
      this.setState({ count: res.data.articles.length });
      console.log(this.state.data);
    });
  }

  splitMenuItems(count) {
    const split = this.state.data.reduce((result, item, index) => {
      if (index % count === 0) result.push([]);
      result[Math.floor(index / count)].push(item);

      return result;
    }, []);

    let newsSplitted = split.map((newsItems, i) => (
      <Grid.Row key={i}>
        {newsItems.map((news, j) => (
          <Grid.Column key={j}>
            <NewsCard
              desc={news.description}
              title={news.title}
              image={news.urlToImage}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    ));
    return newsSplitted;
  }
  render() {
    return (
      <Grid columns="equal" divided>
        {this.splitMenuItems(4)}
      </Grid>
    );
  }
}
