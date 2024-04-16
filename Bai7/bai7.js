const firstArr = [1, 2, 3]
const secondArr = [4, 5, 6]

const thirdArr = [...firstArr, ...secondArr]
const fourthArr = [...secondArr, ...firstArr]

console.log(thirdArr)
console.log(fourthArr)

// thêm phần tử vào cuối mảng

let myArr = ['Eric', 'HoiDanIT', 'React']
// myArr.push(7)
// console.log(myArr)
// myArr = [...myArr, 'new item']
// console.log(myArr)

// thêm phần tử vào đâu mảng
// myArr.unshift('new item')
// console.log(myArr)
myArr = ['new item', ...myArr]
console.log(myArr)

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
}
const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
}
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle)

const state = {
  name: 'Nam',
  age: 19,
  address: 'HaLong',
}

const result = { ...state, age: 20 }
console.log(result)

function sum(x, y, z) {
  return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers))
