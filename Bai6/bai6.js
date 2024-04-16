let a = 5
let b = 10
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.')

console.log(`Fifteen is ${a + b} and
not ${2 * a + b} .
`)

const base_url = 'localhost:8080'
const api = 'get-user'
const fetch_page = 2

const result = `${base_url}/${api}?page=${fetch_page}`
console.log(result)
