class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = [initialValue];
  }
  getValue() {
    return this.#value.join("");
  }
  padEnd(str) {
    this.#value.push(str);
    return this.#value.join("");
  }
  padStart(str) {
    this.#value.unshift(str);
    return this.#value.join("");
  }
  padBoth(str) {
    this.#value.unshift(str);
    this.#value.push(str);
    return this.#value.join("");
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
