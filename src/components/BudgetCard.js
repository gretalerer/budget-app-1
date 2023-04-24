import { Card } from "react-bootstrap";
import { currencyFormatter } from "../utils";



import { useState } from "react";

export default function BudgetCard() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [max, setMax] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} className="me-2" />
          <div className="d-flex align-items-baseline">
            <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
            {" / "}
            <input type="number" placeholder="Max" value={max} onChange={handleMaxChange} />
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

