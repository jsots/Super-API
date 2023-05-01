export function skipUndefinedProperties(value) {
  // recursively check if value is an object
  if (typeof value === 'object' && value !== null) {
    // loop through all properties of the object
    for (let prop in value) {
      // if the property is undefined, delete it
      if (value[prop] === undefined) {
        delete value[prop];
      } else {
        // if the property is an object, recursively call this function on it
        value[prop] = skipUndefinedProperties(value[prop]);
      }
    }
  }
  // return the value with any undefined properties deleted
  return value;
}
