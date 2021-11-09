import Item from './item'

// import { v4 as uuidv4 } from 'uuid';
function Transaction(props) {
    const { data } = props
    //แบบสอง
    // const ListOfItem = []
    // name.forEach((val)=>{
    //     ListOfItem.push(<Item amount={val.amount} name={val.name}></Item>)
    // })
    return (
        ///แบบแรก
        // <ul>
        //     <li>ค่าเดินทาง <span>-200</span></li>
        //     <li>เงินเดือน <span>+2000</span></li>
        //     <li>อาหาร <span>-500</span></li>
        //     <li>ค่าใช้จ่าย <span>-300</span></li>
        // </ul>
        //แบบสอง
        // <ul style={{listStyleType:'none'}}>{ListOfItem}</ul>
        //แบบสามตามคลิปสอน
        <div>
            <ul>
                {data.map((element, key) => {
                    // return <Item name={val.name} amount={val.amount}></Item>
                    // return <Item {...val} key={uuidv4()}></Item> //ลดรูปโดยใช้ Spread Operator ได้อีกโดยชื่อตัวแปรเหมือนกันมันจะกระจายให้เลย
                    return <Item {...element} key={element.id}></Item> //ลดรูปโดยใช้ Spread Operator ได้อีกโดยชื่อตัวแปรเหมือนกันมันจะกระจายให้เลย
                })
                }
            </ul>
        </div>
    )
}
export default Transaction