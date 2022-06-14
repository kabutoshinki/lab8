import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { DISHES } from '../shared/dishes';


// Adding DishDetail component
class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }


  renderDish(dish) {
    if (dish != null) {
      return (
        
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div></div>
      )
    }
    const showComments = comments.map((cmnt) => {
      return (
        <ul class="list-unstyled">
          <li  >
            <p>{cmnt.comment}</p>
            <p>--{cmnt.author} , {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(cmnt.date)))}</p>
          </li>
        </ul>
      )
    });

    return (
      <div>
        <h4>Comments</h4>
        {showComments}
      </div>
    )
  }


  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return (
        <div></div>
      )
    } else {
      const dishItem = this.renderDish(dish);
      const dishComment = this.renderComments(dish.comments);
      return (
        <div className='row'>
          <div className="col-12 col-md-5 m-1">{dishItem}</div>
          <div className="col-12 col-md-5 m-1">{dishComment}</div>
        </div>
      )
    }
  }
}



export default DishDetail;