module.exports = function reverse (n) {
  n = Math.sqrt(n**2); 
  return String(n).split("").reverse().join("");
}
