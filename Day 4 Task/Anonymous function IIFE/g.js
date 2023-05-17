// g. Remove duplicates from an array

let a = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c',1,1,2,2,4,4,3,3];
(function(d){
let b = [];

for (let i = 0; i < d.length; i++) {
  if (b.indexOf(d[i]) === -1) {
    b.push(d[i]);
  }
}
console.log(b);
})(a);
