import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, CardText, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// function RenderCard({ item, isLoading, errMess }) {

//   if (isLoading) {
//     return (
//       <Loading />
//     );
//   }
//   else if (errMess) {
//     return (
//       <h4>{errMess}</h4>
//     );
//   }
//   else
//     return (
//       <Card>
//         <CardImg src={item.image} alt={item.name} />
//         <CardBody>
//           <CardTitle>{item.name}</CardTitle>
//           {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//           <CardText>{item.description}</CardText>
//         </CardBody>
//       </Card>
//     );

// }


const Menu = (props) => {

  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
        {/* <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  /> */}
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    );

}

export default Menu;

