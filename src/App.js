import './App.css';
import ReportComponent from './component/ReportComponent';
import { useState, useEffect } from 'react';
import DataContext from './data/DataContext';
import InsertComponent from './component/insertComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [showReport, setShowReport] = useState(true)
  const initData = [
    { id: 1, title: "ค่าเดินทาง", amount: -200 },
    { id: 2, title: "เงินเดือน", amount: 2000 },
    { id: 3, title: "อาหาร", amount: -500 },
    { id: 4, title: "ค่าใช้จ่าย", amount: -3000 }
  ]
  const [items, setItems] = useState(initData)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  const onAddItem = (newItem) => {
    setItems((oldData) => {
      return [newItem, ...oldData]
    })
    console.log(`รายการใหม่ที่แอดเพิ่มเข้ามา`, newItem)
  }
  // const reducer = (state, action) => {
  //   console.log('test')
  //   switch (action.type) {
  //     case "show":
  //       return setShowReport(true)
  //     case "hide":
  //       return setShowReport(false)
  //     default: setShowReport(true)
  //   }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)
  useEffect(() => {
    const amounts = items.map(items => items.amount)
    let income = amounts.filter(a => a > 0).reduce((total, element) => total += element, 0)
    let expense = (amounts.filter(a => a < 0).reduce((total, element) => total += element, 0)) * -1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items, reportIncome, reportExpense])
  return (
    <DataContext.Provider value={{
      income: reportIncome,
      expense: reportExpense
    }}>
      <div className="AppLayout">
        <div>
          <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
          <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" exact element={<ReportComponent />}></Route>
                <Route path="insert" exact element={<InsertComponent onAddItem={onAddItem} items={items} />}>
                </Route>
              </Routes>
            </div>
          </Router>
          {/* <button onClick={() => dispatch({ type: "show" })}>เพิ่ม</button>
          <button onClick={() => dispatch({ type: "hide" })}>ลด</button>
          {showReport && <ReportComponent />} */}


        </div>

      </div>
    </DataContext.Provider>
    // <div>
    //   <h1>{result}</h1>
    //   <button onClick={()=>dispatch({type:"ADD"})}>เพิ่ม</button>
    //   <button onClick={()=>dispatch({type:"SUB"})}>ลด</button>
    //   <button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>

    // </div>
  );
}

export default App;
