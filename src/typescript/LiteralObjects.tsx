import React from 'react'

interface Person {
    completeName: string;
    age: number;
    address: Address
};

interface Address {
    country: string;
    houseNumber: number;
}

const LiteralObjects = () => {
    const person:Person = {
        completeName: "Saul",
        age: 25,
        address: {
            country: "USA",
            houseNumber: 486
        }
    }
  return (
    <>
        <h3>Literal Objects</h3>
        <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default LiteralObjects