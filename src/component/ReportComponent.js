import DataContext from "../data/DataContext"
import { useContext } from "react"
import "./ReportComponent.css"
const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    return (
        <div>
            <div>
                <h4>ยอดคงเหลือ</h4>
                <h1>{income - expense}</h1>
            </div>
            <div className="ReportContainer">
                    <div>รายรับ<br />{income}</div>
                    <div>รายจ่าย<br />{expense}</div>
            </div>
            {/* เรียกใช้ Context แบบแรกผ่าน Consumer */}
            {/* <DataContext.Consumer>
                {context => <p>รายรับ : {context.income}</p>}
            </DataContext.Consumer> */}
        </div>

    )
}
export default ReportComponent