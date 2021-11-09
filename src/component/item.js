import './item.css'
import PropTypes from 'prop-types';
function Item(props){ //หรือจะใช้รับ Parameter ตรงได้เลย ({name,amount})
    const {title,amount} = props
    const status = amount < 0 ? "expense" : "income"
    const symbol = amount > 0 ? "+" : "-"
    return(
        <li className={`Box ${status}`}><span>{title} </span><span>{symbol}{Math.abs(amount)}</span></li>
    )
}
Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item