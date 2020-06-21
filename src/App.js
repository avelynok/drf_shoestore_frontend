import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      shoes: []
    };
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/shoes/')
    .then(res => res.json())
    .then(data => this.setState({shoes: data}))
  }
  render(){
    return (
      <div>
        <h1>Shoes</h1>
       <p>
          {this.state.shoes.map((shoe) => {
            return (
              <ul>
                 <h3>
                  Brand: {shoe.brand}
                </h3>
                <li>
                  Size: {shoe.size}
                </li>
                <li>
                  Manufacturer: {shoe.manufacturer}
                </li>
                <li>
                  Color: {shoe.color}
                </li>
                <li>
                  Material: {shoe.material}
                </li>
                <li>
                  Type: {shoe.shoe_type}
                </li>
                <li>
                  Fasten_type: {shoe.fasten_type}
                </li>
              </ul>
            ); 
          })}
      </p>
      </div>
    );
    }
}

export default App;
