import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
const FormComponent = (props) => {
    console.log("render form component")
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [valid, setValid] = useState(false)
    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle(``)
        setAmount(0)
        setValid(false)
    }
    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setValid(checkData)
    }, [amount, title])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="+ รายรับ , - รายจ่าย" onChange={inputAmount} value={amount} required/>
                </div>
                <div className="form-control">
                    <button type="submit" disabled={!valid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent