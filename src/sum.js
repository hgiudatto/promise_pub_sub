const sum = (a, b) => {
  return a + b;
};

/* const sumAsync = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) reject(new Error("Number should be non negative."));
      resolve(a + b);
    }, 2000);
  });
}; */

module.exports = sum;
