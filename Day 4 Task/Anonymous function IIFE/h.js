// h. Rotate an array by k times

let a = [1, 2, 3, 4, 5];
let k = 4;

(function (d,e) {
  for (let i = 0; i < e; i++) {
    let shift = d.shift();
    d.push(shift);
  }
  console.log(d);
})(a,k);
