import React from 'react'
import './Cards.css'

const Cards = props => {

    const types = () => {
		if (props.type[1]) {
			return props.type[0].type.name + " | " + props.type[1].type.name;
		}
		else {
			return props.type[0].type.name;
		}
	}

    return (
        <div className={`Card ${props.typePokemon}`}>
            <p>#{props.id}</p>
            <div>
                <img src={props.img} />
            </div>
            <p> {props.name} </p>
            {types()}
        </div>
    )
}

export default Cards
