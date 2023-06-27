import React from 'react'
import './Cards.css'

const Cards = props => {


    const typePokemon1 = () => {
        
        if (props.type[0].type.name === "fairy") return "Fairy"
        if (props.type[0].type.name === "steel") return "Steel"
        if (props.type[0].type.name === "dark") return "Dark"
        if (props.type[0].type.name === "dragon") return "Dragon"
        if (props.type[0].type.name === "ghost") return "Ghost"
        if (props.type[0].type.name === "rock") return "Rock"
        if (props.type[0].type.name === "bug") return "Bug"
        if (props.type[0].type.name === "psychic") return "Psychic"
        if (props.type[0].type.name === "ground") return "Ground"
        if (props.type[0].type.name === "poison") return "Poison"
        if (props.type[0].type.name === "fighting") return "Fighting"
        if (props.type[0].type.name === "ice") return "Ice"
        if (props.type[0].type.name === "grass") return "Grass"
        if (props.type[0].type.name === "electric") return "Electric"
        if (props.type[0].type.name === "normal") return "Normal"
        if (props.type[0].type.name === "water") return "Water"
        if (props.type[0].type.name === "fire") return "Fire"
        if (props.type[0].type.name === "flying") return "Flying"
    
        return ""
      }

      const typePokemon2 = () => {
        
        if (props.type[1].type.name === "fairy") return "Fairy"
        if (props.type[1].type.name === "steel") return "Steel"
        if (props.type[1].type.name === "dark") return "Dark"
        if (props.type[1].type.name === "dragon") return "Dragon"
        if (props.type[1].type.name === "ghost") return "Ghost"
        if (props.type[1].type.name === "rock") return "Rock"
        if (props.type[1].type.name === "bug") return "Bug"
        if (props.type[1].type.name === "psychic") return "Psychic"
        if (props.type[1].type.name === "ground") return "Ground"
        if (props.type[1].type.name === "poison") return "Poison"
        if (props.type[1].type.name === "fighting") return "Fighting"
        if (props.type[1].type.name === "ice") return "Ice"
        if (props.type[1].type.name === "grass") return "Grass"
        if (props.type[1].type.name === "electric") return "Electric"
        if (props.type[1].type.name === "normal") return "Normal"
        if (props.type[1].type.name === "water") return "Water"
        if (props.type[1].type.name === "fire") return "Fire"
        if (props.type[1].type.name === "flying") return "Flying"
    
        return ""
      }

    return (
        <div className={`Card ${typePokemon1()}`}>
            <p>#{props.id}</p>
            <div>
                <img src={props.img} />
            </div>
            <p> {props.name} </p>
            {props.type[1] ? 
                <div className="Type">
                    <p className={typePokemon1()}> {props.type[0].type.name} </p>
                    <p className={typePokemon2()}> {props.type[1].type.name} </p>
                </div>
                :
                <div className="Type">
                    <p className={typePokemon1()}>{props.type[0].type.name} </p>
                </div>
            }
        </div>
    )
}

export default Cards
