let emni: any;

emni = "next level web development";

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseInt(param) * 1000;
    return `the converted value is: ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `the converted value is: ${value}`;
  }
}

console.log(kgToGram("10"));
console.log(kgToGram(10));
