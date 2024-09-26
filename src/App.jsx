import './App.css';

import React, { useState  } from 'react';

import { List } from './components/List/List';
import { Details } from './components/Details/Details';


export const DataContext = React.createContext({})

function App() {

  const [isLoading, setIsLoading] = useState({
    list: false,
    details: false,
  });

  const [selectedID, setSelectedID] = useState(null)

  const handleClick = (item) => {
    console.log(item)
    setSelectedID(item.id)
  }

  return (
    <div className="App">
      <DataContext.Provider value={{setIsLoading}}>
        <List handleClick={handleClick} selectedID={selectedID} isLoading={isLoading}/>
        {selectedID !== null ? <Details selectedID={selectedID}/> : null}
      </DataContext.Provider>
    </div>
  );
}

export default App;
