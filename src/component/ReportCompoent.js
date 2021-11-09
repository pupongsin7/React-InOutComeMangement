import DataContext from "../data/DataContext"
import { useContext } from "react"
const ReportComponent = () => {
    const {income,expense} = useContext(DataContext)
    return (
        <div>
            <div>
                <p>รายรับ : {income}</p>
                <p>รายจ่าย : {expense}</p>
                <div>
                    <h4>ยอดคงเหลือ</h4>
                    <h1>{income-expense}</h1>
                </div>
            </div>
            {/* เรียกใช้ Context แบบแรกผ่าน Consumer */}
            {/* <DataContext.Consumer>
                {context => <p>รายรับ : {context.income}</p>}
            </DataContext.Consumer> */}
        </div>

    )
}
export default ReportComponent