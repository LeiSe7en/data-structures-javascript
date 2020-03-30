export const toString = function (item) {
  if (typeof item !== 'object') {
    return String(item)
  } else {
    return JSON.stringify(item)
  }
}

export const defaultEquals = function (a, b) {
  return a === b
}