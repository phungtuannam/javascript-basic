const user = {}

console.log(user?.address?.street ?? 'not found')

// thao tác với function
//obj.func()?.()

let obj = {
  name: 'Nam',
  age: 20,

  address: {
    street: 'abc',
  },
}

console.log(obj?.address?.abc?.xyz)
