import "./style.css";
import { sum, multiply } from "./math.js";
let div = document.createElement("div");
div.innerHTML=`Result: ${multiply(5)} and ${sum(5,6)}`;
document.body.append(div);


function sum1(a, b) {
return a + b;
}
console.log(sum1(2, 4));