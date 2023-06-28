import './Buttons.css'

const Buttons = props => {

    return (
        <button onClick={props.function}> {props.buttonName} </button>
    )
}

export default Buttons
