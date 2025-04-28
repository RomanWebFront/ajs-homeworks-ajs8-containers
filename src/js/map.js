export class ErrorRepository {
    constructor() {
     this.errors = new Map();
    }
    translate(code) {
      const error = this.errors.get(code);
      if (error === undefined) {
        return 'Unknown error';
      } else {
        return error;
      }
    } 
    add(code, error) {
        if (!this.errors.has(code)) {
            this.errors.set(code, error);
        } else {
            console.error(code + " уже в словаре")
        }
    }
    toArray() {
      const array = [];
      for (let error of this.errors) {
        array.push(error);
      }
      return array;
    } 
}

