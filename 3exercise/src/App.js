import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: ""
    }
  }

  onSearchFieldChange = (event) => {
    console.log( 'Keyboard event: ' + event.target.value);
    this.setState({ productSearchString: event.target.value });
  }



  render()
  {
    let output =
      <>
        
         <input type="text" placeholder = 'Search here' onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>
return(
  <div>
    {output}
  </div>
)
  }
}

export default App;