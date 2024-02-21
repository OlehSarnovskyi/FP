// Sample data structure
const person = {
    name: "John",
    address: {
        city: "New York",
        zipCode: "10001"
    }
}

// Lens for the "address" property
const addressLens = {
    get: (person) => person.address,
    set: (address, person) => ({ ...person, address })
}

// Lens for the "zipCode" property
const zipCodeLens = {
    get: (address) => address.zipCode,
    set: (zipCode, address) => ({ ...address, zipCode })
}

// Usage of lenses
const city = addressLens.get(person).city
console.log(city)

const updatedAddress = zipCodeLens.set("20001", person.address)
console.log(updatedAddress)


// Lenses provide a means to decouple an object's shape from the logic operating on that object.
// It accomplishes this using the getter/setter pattern to 'focus in' on a sub-part of the object,
// which then isolates that sub-part for reads and writes without mutating the object.
