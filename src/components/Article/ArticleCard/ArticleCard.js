import React from 'react'

import Button from '../../UI/Button/Button'
import { Card } from 'react-bootstrap'
import classes from './ArticleCard.module.css'
import defaultImage from '../../../assets/images/default-article-image.jpg'

const articleCard = (props) => (
  <Card className={classes.ArticleCard + " text-center mb-2 align-self-center"}>
    {
      props.imageUrl ?
        <Card.Img className={classes.Img} variant="top" src={props.imageUrl} />
        : <Card.Img className={classes.Img} variant="top" src={defaultImage} />
    }
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.children}
      </Card.Text>
      <Button
        btnType="primary"
        clicked={props.btnClicked}
      >
        READ ARTICLE
      </Button>
    </Card.Body>
  </Card>
)

export default articleCard