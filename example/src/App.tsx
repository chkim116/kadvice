import { KadviceJsonModel, kadvice } from 'kadvice';
import './App.css';
import { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState<KadviceJsonModel>(kadvice.getOne());

  const handleChangeAdvice = () => {
    setAdvice(kadvice.getOne());
  };

  return (
    <div>
      <h1>Kadvice</h1>
      <div>{advice.message}</div>
      <div>
        {advice.author} - {advice.authorProfile}
      </div>

      <br />
      <button onClick={handleChangeAdvice}>Click!</button>
    </div>
  );
}

export default App;
