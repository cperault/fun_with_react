import React, { useState, useEffect } from 'react';

const Main = ({ company }) => {

    const [counter, setCounter] = useState(0);

    const people = [
        { name: "Christopher", age: 28 },
        { name: "Dayton", age: 33 },
        { name: "Dillon", age: 32 },
        { name: "John", age: 45 }
    ]

    // useEffect(() => {
    //     //do stuff

    // }, [people])

    const peopleData = people.map(p => {
        return p.name + " is " + p.age + " years old";
    })

    return (
        <div>
            <h1>
                Welcome, {company}!
            </h1>
            <ul>
                {people.map(p => {
                    return <li>{p.name + " is " + p.age + " years old"}</li>
                })}
            </ul>

        </div>
    )
}

export default Main;