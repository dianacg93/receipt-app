import '../App.css'

const Receipt = ({receipt, idx, setReceipt}) => {

    return (
        <div key={receipt.idx} className="receipt-individual">
            <h3 className="receipt-customer">{receipt.person}</h3>
            <p><strong>Main: </strong>{receipt.order.main}</p>
            <p><strong>Protein: </strong>{receipt.order.protein}</p>
            <p><strong>Rice: </strong>{receipt.order.rice}</p>
            <p><strong>Sauce: </strong>{receipt.order.sauce}</p>
            <p><strong>Drink: </strong>{receipt.order.drink}</p>
            <p><strong>Cost: </strong>{receipt.order.cost}</p>
            <p><strong>Paid: </strong>{receipt.paid.toString()}</p>
            <button className="receipt-pay" onClick={() => setReceipt(idx)}>Pay</button>
        </div>
    )
}

export default Receipt;