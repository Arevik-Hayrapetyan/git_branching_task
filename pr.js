class worldPlay {
    constructor(words) {
      this.words = [];
    }
  
    play(word) {
      if (this.words.length > 0) {
        let previousWord = this.words[this.words.length - 1];
        console.log(`PREVIOUS WORD:: ${this.words[this.words.length - 1]}`)
        let lastElemPreviousWord = previousWord[previousWord.length - 1];
        console.log(`LASTELEMENT:: ${lastElemPreviousWord}`)
        console.log(`This is WORD:: ${word} `)
  
        let [firstElement] = word;
        console.log(`FIRSTELEMENT:: ${firstElement}`);
        console.log(`Words array:: ${this.words}`);
  
        for (let indx = 0; indx < this.words.length; indx++) {
          if (word === this.words[indx]) {
            return "Games over";
          }
        }
        if (firstElement === lastElemPreviousWord) {
          this.words.push(word);
          return this.words;
        } else {
          return "Games over";
        }
      } else {
        this.words.push(word);
        return this.words;
      }
    }
  
    restart() {
      this.words = [];
      return "Game restarted!!";
    }
  }
  
  myShiritory = new worldPlay();
  console.log(myShiritory.play("apple")); // ["apple"]
  console.log(myShiritory.play("ear")); // ["apple", "ear"]
  console.log(myShiritory.play("rhino")); // ["apple", "ear", "rhino"]
  console.log(myShiritory.play("corn")); // "game over"
  
  // Corn does not start with an "o".
  console.log(myShiritory.words); // ["apple", "ear", "rhino"]
  // Words should be accessible.
  console.log(myShiritory.restart()); // "game restarted"
  console.log(myShiritory.words); // []
  // Words array should be set back to empty.
  console.log(myShiritory.play("hostess")); // ["hostess"]
  console.log(myShiritory.play("stash")); // ["hostess", "stash"]
  console.log(myShiritory.play("hostess")); // "game over"
  