//import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
// import DishDetail from './components/DishdetailComponent';



class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); 
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
} 
 
export default App;
