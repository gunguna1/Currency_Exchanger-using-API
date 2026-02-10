import React, { useState ,useEffect} from 'react'

function Card() {
  
  const[amount,setAmount]=useState(1)
const[to_currency,setTo_currency]=useState("usd")
const[rate,setRate]=useState(null)
const [currency, setCurrency] = useState("usd")
let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`


useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setRate(data[currency][to_currency])
    })
}, [currency, to_currency])

  return (
    <>
    <div className="bg-black text-amber-50 p-6 rounded-lg w-80 space-y-5">

  <div>
    <label className="text-sm block mb-1">Amount</label>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full px-3 py-2 rounded bg-white text-black"

    />
  </div>

  <div>
    <label className="text-sm block mb-1">From</label>
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="w-full px-3 py-2 rounded bg-white text-black"

    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="inr">INR</option>
    </select>
  </div>

  <div>
    <label className="text-sm block mb-1">To</label>
    <select
      value={to_currency}
      onChange={(e) => setTo_currency(e.target.value)}
      className="w-full px-3 py-2 rounded bg-white text-black"

    >
      <option value="inr">INR</option>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
    </select>
  </div>

  <div className="text-xl font-bold text-center">
    {rate ? (Number(amount) * rate).toFixed(2) : "--"}
  </div>

</div>

    </>
    
  )
}

export default Card