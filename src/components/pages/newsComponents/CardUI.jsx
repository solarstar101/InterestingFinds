import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styles from "../newsComponents/Newscard.module.css";

export default function NewsCard(props) {
  return (
    <React.Fragment>
      <Card>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content className={styles.outerCard}>
          <Card.Header>{props.title} </Card.Header>
          <Card.Meta>
            <span className="date">{props.fixedDate}</span>
          </Card.Meta>
          <Card.Description>{props.desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
