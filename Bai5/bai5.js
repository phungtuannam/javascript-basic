const myArray = [1, 2, 3, 4]

const myList = myArray.map((item, index) => {
  // console.log(item, index)
  return item * 2
})

// console.log(myArray)
// console.log(myList)

const ages = [32, 33, 16, 40]
// const result = ages.filter(checkAdult)
// function checkAdult(age) {
//   return age >= 18
// }

const result = ages.filter((item) => {
  return item >= 18
})

console.log(result)
