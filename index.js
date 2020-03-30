const BASE_PATH = './src'
const repl = require('repl')
import Stack from './src/Stack'
import LinkedList from './src/LinkedList'
var stack = new Stack()
var linkedList = new LinkedList()

linkedList.push(1)
linkedList.push(16)
linkedList.push(17)
linkedList.push(18)
linkedList.push(19)
linkedList.push(10)
linkedList.removeAt(5)
console.log(linkedList.toString(10))
// linkedList.insert(10000000, 100000)
// console.log(linkedList.getElementAt(1))

// repl.start({prompt: '> ', ignoreUndefined: true}).context.data = stack