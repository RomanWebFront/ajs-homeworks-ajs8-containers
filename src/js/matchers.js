import getHealthColor from './trueFunction.js';

  export default function getMatchers(personArray) {
    personArray.sort((a, b) => b.health - a.health)
    let array = [];
    for (let i = 0; i < personArray.length; i++) {
        array.push(getHealthColor(personArray[i]))
    }
    return array
  }
  
  