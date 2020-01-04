import React, { useState } from "react";

import { Container, Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import PriceCards from "../pages/pricingComponents/PriceCards";

//setting state with react useState hook
function Pricing() {
  const [subscription, setSubscription] = useState({
    time: "Monthly"
  });

  return (
    <React.Fragment>
      <h1>{subscription.time} </h1>
      <Button.Group id="Subscriptions">
        <Button
          onClick={() => {
            setSubscription({ time: "Monthly" });
          }}
          className={subscription.time === "Monthly" ? "positive" : null}
        >
          Monthly
        </Button>
        <Button.Or />
        <Button
          onClick={() => {
            setSubscription({ time: "Yearly" });
          }}
          className={subscription.time === "Yearly" ? "positive" : null}
        >
          Yearly
        </Button>
      </Button.Group>
      <Container>
        <Grid columns="equal">
          <Grid.Row className="three column stackable">
            <Grid.Column>
              <PriceCards
                subscription={subscription.time}
                monthly={"$50"}
                yearly={"$500"}
                status={"Basic"}
              />
            </Grid.Column>
            <Grid.Column>
              <PriceCards
                subscription={subscription.time}
                monthly={"$100"}
                yearly={"$1000"}
                status={"Premium"}
              />
            </Grid.Column>
            <Grid.Column>
              <PriceCards
                subscription={subscription.time}
                monthly={"$200"}
                yearly={"$2000"}
                status={"Elite"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Pricing;
