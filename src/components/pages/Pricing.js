import React, { useState, useEffect } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

function Pricing() {
  var data = require("../../Data/pricing.json"); // forward slashes will depend on the file location

  const [hasError, setErrors] = useState(false);
  const [toggleState, setToggle] = useState(true);

  const [pricings, setPricings] = useState({});

  function toggle() {
    setToggle(!toggleState);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("../../Data/pricing.json");
      res
        .json()
        .then(res => setPricings(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <React.Fragment>
      <Button onClick={toggle}>
        {toggleState ? <span>Montly!</span> : <span>Yearly!</span>}
      </Button>
      <Container>
        <Grid columns="equal">
          <Grid.Row className="three column stackable">
            <Grid.Column>
              <Segment className="ui raised segments">
                <Segment className="ui center aligned secondary">
                  <div className="ui statistic">
                    <div className="value">$50</div>
                    <div className="label">per month</div>
                  </div>
                </Segment>
                <Segment className="ui center aligned ">
                  <p>- Premium Feature One</p>
                </Segment>
                <Segment className="ui center aligned segment">
                  <p>- Premium Feature Two</p>
                </Segment>
              </Segment>
              <div className="ui green fluid button">Select</div>
            </Grid.Column>
            <Grid.Column>
              <Segment className="ui raised segments">
                <Segment className="ui center aligned secondary">
                  <div className="ui statistic">
                    <div className="value">$100</div>
                    <div className="label">per month</div>
                  </div>
                </Segment>
                <Segment className="ui center aligned ">
                  <p>- Premium Feature One</p>
                </Segment>
                <Segment className="ui center aligned segment">
                  <p>- Premium Feature Two</p>
                </Segment>
              </Segment>
              <div className="ui green fluid button">Select</div>
            </Grid.Column>
            <Grid.Column>
              <Segment className="ui raised segments">
                <Segment className="ui center aligned secondary">
                  <div className="ui statistic">
                    <div className="value">$150</div>
                    <div className="label">per month</div>
                  </div>
                </Segment>
                <Segment className="ui center aligned ">
                  <p>- Premium Feature One</p>
                </Segment>
                <Segment className="ui center aligned segment">
                  <p>- Premium Feature Two</p>
                </Segment>
              </Segment>
              <div className="ui green fluid button">Select</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div>{JSON.stringify(pricings)}</div>
      <span>Has error: {JSON.stringify(hasError)}</span>
    </React.Fragment>
  );
}

export default Pricing;
