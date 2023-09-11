// export default function sum(a = 0, b = 0) {
//   return a + b;
// }

function sum(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export default sum;
