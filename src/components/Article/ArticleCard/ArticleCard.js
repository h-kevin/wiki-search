import React from 'react'

import Button from '../../UI/Button/Button'
import { Card } from 'react-bootstrap'
import classes from './ArticleCard.module.css'

const articleCard = (props) => (
  <Card className="text-center mb-2">
    <Card.Img className={classes.ArticleCard} variant="top" src={props.imageUrl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.children}
      </Card.Text>
      <Button btnType="primary">READ ARTICLE</Button>
    </Card.Body>
  </Card>
)

export default articleCard