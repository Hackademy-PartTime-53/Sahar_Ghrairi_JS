/*array: dato strutturale  */
let linguaggi = ["html", "css", "js", "python"]
console.log(linguaggi)
let mix = ["ciao", 2, [1, 2], { name: "marco" }]
linguaggi.unshift("JAVA");
linguaggi.push("C++")

let first = linguaggi.shift();
let last = linguaggi.pop();
linguaggi = linguaggi.concat(["JAVA", "C++"])
for (let i = 0; i < linguaggi.length; i++) {
    const element = linguaggi[i];




    console.log(element)
}