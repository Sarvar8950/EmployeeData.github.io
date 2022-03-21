import React from 'react'

export default function Input() {
  return (
    <div>
      <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Gender' onChange={e => setGender(e.target.value)} />
            <select id="department">
                <option value="all">Select Department</option>
                <option value="marketing">Marketing</option>
                <option value="hr">HR</option>
                <option value="it">IT</option>
                <option value="finance">Finance</option>
            </select>
            <input type="text" placeholder='Role' onChange={e => setRole(e.target.value)} />
            <input type="number" placeholder='Salary' onChange={e => setSalary(e.target.value)} />
            <button onClick={addemployee}>ADD EMPLOYEE</button>
            <div className="btns">
                <button onClick={alldata}>Show All Department</button>
                <button onClick={marketdata}>Show Marketing</button>
                <button onClick={hrdata}>Show HR</button>
                <button onClick={itdata}>Show IT</button>
                <button onClick={financedata}>Show Finance</button>
                <select id="sort" onChange={sortbyprice}>
                    <option value="all">Sort By</option>
                    <option value="lth">Salary Low to High</option>
                    <option value="htl">Salary High to Low</option>
                </select>
            </div>
    </div>
  )
}
