import DataContext from "../data/DataContext"
import { useContext } from "react"
import "./ReportComponent.css"
const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <div>
                <h2>ยอดคงเหลือ</h2>
                <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
            </div>
            <div className="ReportContainer">
                <div><h2>รายรับ</h2><h1>฿{formatNumber(income.toFixed(2))}</h1></div>
                <div><h2>รายจ่าย</h2><h1>฿{formatNumber(expense.toFixed(2))}</h1></div>
            </div>
            {/* เรียกใช้ Context แบบแรกผ่าน Consumer */}
            {/* <DataContext.Consumer>
                {context => <p>รายรับ : {context.income}</p>}
            </DataContext.Consumer> */}
        </div>

    )
}
export default ReportComponent