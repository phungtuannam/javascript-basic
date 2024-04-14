// Declare an object of the Novel class, then get it’s author
// Novel
// Variable Value
// Title "Tôi thấy hoa vàng trên cỏ xanh
// Author Nguyễn Ngọc Ánh

class Novel {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  getAuthor() {
    return 'Author:' + this.author
  }
}

let myNovel = new Novel('Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Ngọc Ánh')

console.log(myNovel)
console.log(myNovel.getAuthor())
