import { useState } from 'react';
import VVComponent from './VVComponents/VVComponent';
import VVModal from './VVComponents/VVModal';
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);

  const showHandler = () => {
    setIsShown(true);
  }

  const hideHandler = () => {
    setIsShown(false);
  }

  return (
    <div className="App">
      {isShown && <VVModal onClose={hideHandler} />}
      <header className="App-header">
        <VVComponent onShow={showHandler}/>
      </header>
    </div>
  );
}

export default App;
