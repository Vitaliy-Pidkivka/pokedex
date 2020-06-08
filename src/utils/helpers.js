/** can be used for generation of key props for elements rendered on loop */
export const createKey = (base = '', ...args) => (
  args.reduce((result, item) => `${result}-${item}`, base)
)

/** can be used for instances of Array, Object and String */
export const isEmpty = (collection = []) => (
  !(collection.hasOwnProperty('length')
    ? collection.length
    : Object.keys(collection).length)
)