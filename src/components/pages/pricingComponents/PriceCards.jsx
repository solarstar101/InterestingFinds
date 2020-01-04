import React from "react";
import { Segment } from "semantic-ui-react";

export default function PriceCards(props) {
  return (
    <div>
      <Segment className="ui raised segments">
        <Segment className="ui center aligned secondary">
          <div className="ui statistic">
            <h1>{props.subscription === "Yearly" ? "Yearly" : "Monthly"}</h1>
            <div className="value">
              {props.subscription === "Yearly" ? props.yearly : props.monthly}
            </div>
            <div className="label">{props.status}</div>
          </div>
        </Segment>
        <Segment className="ui center aligned ">
          <p>- {props.status} Feature One</p>
        </Segment>
        <Segment className="ui center aligned segment">
          <p>- {props.status} Feature Two</p>
        </Segment>
        <Segment className="ui center aligned ">
          <p>- {props.status} Feature Three</p>
        </Segment>
        <Segment className="ui center aligned segment">
          <p>- {props.status} Feature Four</p>
        </Segment>
        <Segment className="ui center aligned ">
          <p>- {props.status} Feature Five</p>
        </Segment>
        <Segment className="ui center aligned segment">
          <p>- {props.status} Feature Six</p>
        </Segment>
      </Segment>
      <div className="ui green fluid button">Start Your Free Trial</div>
    </div>
  );
}
