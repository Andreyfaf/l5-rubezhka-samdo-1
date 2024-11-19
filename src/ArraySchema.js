class ArraySchema {
  constructor() {
    this.mass = false;
  }

  isValid(item) {
    if(Array.isArray(item)) {
      if(this.mass === true) {
        for(const hun of item) {
          if(!Number.isInteger(hun)) {
            return false;
          }
        }
        return true;
      }
      return true;
    }
    return false;
  }
  allIntegers() {
    this.mass = true;
    return this;
  }
}

export default ArraySchema;