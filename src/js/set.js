export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (!this.members.has(character)) {
            this.members.add(character);
        } else {
            console.error(character.name + " уже в команде")
        }
    }
    addAll(...characters) {
        for (let character of characters) {
            this.add(character);
        }
    }
    toArray() {
        return Array.from(this.members);
    }
}

export class Character {
    constructor(name) {
     this.name = name;
    }
}