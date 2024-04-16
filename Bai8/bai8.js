const person = { name: 'Eric', age: '26', eyeColor: 'black', like: 'girl' }

const { name, age } = person
console.log(name)
console.log(age)

const city = ['ha noi', 'da nang', 'sai gon', 'ca mau']

const [x, y, , z] = city
console.log(x, y, z)

const react = ['facebook', 'all-in-one', 'javascript']
const [, , tech] = react
console.log(tech)

const dev = { salary: 2000, tool: 'laptop', like: 'bugs' }
const { like: love } = dev
console.log(love) //bugs
