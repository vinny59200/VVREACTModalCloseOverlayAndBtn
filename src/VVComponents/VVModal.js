import  Modal  from '../UI/Modal';
import classes from'./VVModal.module.css'

function VVModal(props){
    return (<Modal onClose={props.onClose}>
        <h3>Hello!</h3>
        <br/>
        <div className={classes.actions}>
        <span>fron the modal</span>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>)
}

export default VVModal;