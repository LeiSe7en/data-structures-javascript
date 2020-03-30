import { toString } from './utils'
export default class Stack {
  constructor() {
    this.count = 0
    this.items = Object.create(null)
  }
  
  push (item) {
    this.items[this.count] = item
    this.count++
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    let ele = this.items[this.count]
    delete this.items[this.count]
    this.count--
    return ele
  }

  peek () {
    return this.items[this.count]
  }

  clear () {
    this.count = 0
    this.items = Object.create(null)
    console.log('clear!')
  }

  toString () {
    if (this.isEmpty()) return ''
    let resultString = toString(this.items[0])
    for (let i = 1; i < this.size(); i++) {
      resultString = `${resultString},${toString(this.items[i])}` 
    }
    return `[${resultString}]`
  }
}