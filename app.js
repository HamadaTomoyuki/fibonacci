'use strict';
/*function tri(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }
  return tri(n-3) + tri(n-2) +tri(n-1);
}
const length = 40;
for (let i = 0; i<=length; i++) {
  console.log(tri(i));
}
*/

const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function tri(n){
  if (memo.has(n)){
    return memo.get(n);
  }
  const value = tri(n-3) + tri(n-2) + tri(n-1);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(tri(i));
}
