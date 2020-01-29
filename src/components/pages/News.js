import React, { Component } from "react";

import { Grid, Button } from "semantic-ui-react";
import NewsCard from "./newsComponents/NewsCard.js";

export default class News extends Component {
  state = {
    data: [],
    count: 0,
    value: "bbc news",
    status: ""
  };

  handleClick = () => {
    const helloworld = "hello beautiful world";

    this.setState({ status: helloworld });
  };

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=climate&apiKey=611fafd7885c44668a4ee5d5785860d9";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myjson => {
        this.setState({ data: myjson.articles });
        this.setState({ count: myjson.articles.length });
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
              key={j}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    ));
    return newsSplitted;
  }

  render() {
    return (
      <Grid stackable={true} columns={4} divided>
        <Button onClick={this.handleClick} />
        {this.state.status}
        {this.splitMenuItems(4)}
      </Grid>
    );
  }
}
