import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }


  AddNewItem = (name, quantity) => {
      return () => {
      
      const SearchResult = this.state.items.findIndex((element, index, array) => {
        if (element.value === name) {
          return true;
        } else {
          return false;
        }

      });
      
      if (SearchResult != -1){
        let AddMore = [...this.state.items];
        AddMore[SearchResult].qty += quantity;
        this.setState({items: AddMore});
      } else{
        this.setState({ items: [...this.state.items,
          {id: this.state.items.length + 1, value: name , qty: quantity, unit: 'x'}
    
          
        ]})
      }

    }
  }


 /* AddCarrots = () => {
    this.setState({ items: [...this.state.items,
    {id: 5, value: 'carrots', qty: 5, unit: 'x'}
    ]})
    
  }
  AddStrawberries = () => {
    this.setState({ items: [...this.state.items,
    {id: 6, value: 'strawberries', qty: 4, unit: 'x'}
    ]})
 
  }
  AddYogurt = () => {
    this.setState({ items: [...this.state.items,
      {id: 7, value: 'yogurt', qty: 3, unit: 'x'}
  ]})

  }
  AddBeer = () => {
    this.setState({ items: [...this.state.items,
      {id: 8, value: 'beer', qty: 2, unit: 'x'}
    ]})
  }*/

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick = {this.AddNewItem('carrots', 5)}> Add 5 Carrots</button>
      <button onClick = {this.AddNewItem('strawberries', 4)}> Add 4 Srawberries</button>
      <button onClick = {this.AddNewItem('yogurt', 3)}> Add 3 Yogurt</button>
      <button onClick = {this.AddNewItem('beer', 2)}> Add 2 Beer</button>
    </div>
  }
}

export default App;