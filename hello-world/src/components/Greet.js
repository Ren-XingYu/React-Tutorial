import React from 'react'

// function Greet(){
//     return <h1>Hello React</h1>
// }

const Greet = (props) => {
    const {name,heroName}=props
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet