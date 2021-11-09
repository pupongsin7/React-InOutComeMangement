import FormComponent from './FormComponent';
import Transaction from './list';
const InsertComponent = (props) => {
    
    const {items} = props
    const onAddItem = (itemData) =>{
        props.onAddItem(itemData)
    }
    return (
        <div>
            <FormComponent onAddItem={onAddItem} />
            <Transaction data={items} />
        </div>
    );
}
export default InsertComponent