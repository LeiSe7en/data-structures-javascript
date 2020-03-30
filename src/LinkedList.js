import { defaultEquals, toString } from './utils'
export class Node {
  constructor (val) {
    this.value = val
    this.next = null    
  }
}
export default class LinkedList {
  constructor (equalFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalFn
  }

  get value () {
    return this.head && this.head.value
  }

  push (element) {
    const node = new Node(element)
    this.count++
    let current = this.head
    if (!current) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }

  insert (index, element) {
    if (index > this.count) {
      console.error('Insert Error: Exceed maximum size')
    } else {
      this.count++
      if (index === this.count) {
        this.push(element)
        return
      }
      const node = new Node(element)
      if (index === 0) {
        node.next = this.head
        this.head = node
        return 
      }
      let i = 0, current = this.head, nextNode = null
      while (i < index - 1) {
        current = current.next
        i++
      }
      node.next = current.next
      current.next = node
    }
  }

  getElementAt (index) {
    if (index > this.count) return 'Exceed maximum size'
    let i = 0, current = this.head
    while (i < index) {
      current = current.next
      i++
    }
    return current.value
  }

  remove (element) {

  }

  removeAt (index) {
    if (this.empty || index > this.size()) return 'Remove Error: Exceed maximum size'
    let current = this.head, i = 0
    if (index === 0) {
      this.head = current.next
    } else {
      while (i < index - 1) {
        current = current.next
        i++
      }
      current.next = current.next ? current.next.next : null
    }
  }

  indexOf (element) {
    if (this.count === 0) return -1
    let i = 0, current = this.head
    while (current) {
      if (this.equalsFn(element, current.value)) {
        return i
      }
      current = current.next
      i++
    }
    return -1
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }

  toString () {
    let result, i = 0, current = this.head
    if (current) {
      result = toString(current.value)
      while (current.next) {
        current = current.next
        result = `${result}, ${toString(current.value)}`
      }
      return `[${result}]`
    } else {
      return ''
    }
  }

  reverse () {

  }
}