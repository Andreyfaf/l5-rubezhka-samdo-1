class NumberSchema {
    isValid(item) {
        if(typeof item === 'number') {
            return true;
        }
        return false;
    }
}

export default NumberSchema;