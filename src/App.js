import './App.css';
import Receipt from './components/Receipt'
// import {receipt1, receipt2, receipt3} from './Records'
import receipts from './Records'
import {useState, useEffect} from 'react'

function App() {

  // const [receipt, setReceipt] = useState([receipt1, receipt2, receipt3])
  const [receipt, setReceipt] = useState(receipts)

  const changePaidVal =(idx) => {
    const newReceipts = [...receipt];
    newReceipts[idx].paid=!newReceipts[idx].paid
    setReceipt(newReceipts)
  }


    return (
    <div className="App">
      <h1>Korilla</h1>
      <div className="receipt-list">
        {receipt.map((receipt, idx) => {
          return <Receipt 
          receipt = {receipt} 
          idx={idx}
          setReceipt = {changePaidVal}
          />
        })}
      </div>     
    </div>
  );
}

export default App;
