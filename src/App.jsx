
import { TextField } from '@mui/material'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("Button Clicked")
    if(principle && rate && year){
      setInterest(principle*rate*year/100 )
    }else{
      alert("Please Fill The Form Completely")
    }
  }
  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }
  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag
    console.log(!!name, value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!name, value.match(/^\d*.?\d+$/));

    if (name == 'principle') {
      setPrinciple(value)
      if (!!name, value.match(/^\d*.?\d+$/)) {
        setinvalidPrinciple(false)
      } else {
        setinvalidPrinciple(true)
      }
    } else if (name == "rate") {
      setRate(value)
      if (!!name, value.match(/^\d*.?\d+$/)) {
        setinvalidRate(false)
      } else {
        setinvalidRate(true)
      }
    } else {
      setYear(value)
      if (!!name, value.match(/^\d*.?\d+$/)) {
        setinvalidYear(false)
      } else {
        setinvalidYear(true)
      }
    }
  }
  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh" }} className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "40%" }} className='bg-light p-5 rounded'>
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your Simple Interest Easily</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'> Total simple interest</p>
          </div>
          <form className='mt-5'>
            <div className='mb-2'>
              <TextField value={principle || ""} name="principle" onChange={(e) => validateInput(e.target)} className="w-100" id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* Invalid Principle */}
            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
              Invalid Principle Amount
            </div>}
            <div className='mb-3'>
              <TextField value={rate || ""} name="rate" onChange={(e) => validateInput(e.target)} className="w-100" id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* Invalid Rate */}
            {invalidRate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate
            </div>}
            <div className='mb-3'>
              <TextField value={year || ""} name="year" onChange={(e) => validateInput(e.target)} className="w-100" id="outlined-year" label="₹ Time Period (Yr)" variant="outlined" />
            </div>
            {/* Invalid Year */}
            {invalidYear && <div className='text-danger fw-bolder mb-3'>
              Invalid Year
            </div>}

            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled = {invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: "50%", height: "70px" }} className="bg-dark">Calculate</Button>

              <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: "70px" }} className="border border-dark text-dark">RESET</Button>
            </Stack>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
