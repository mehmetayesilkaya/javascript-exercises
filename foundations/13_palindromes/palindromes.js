const palindromes = function (pal) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanCh = pal
    .toLowerCase()
    .split("")
    .filter((char) => validCharacters.includes(char))
    .join("");

  const reversed = cleanCh.split("").reverse().join("");

  return reversed == cleanCh;
};

console.log(palindromes("A man, a plan, a canal: Panama!"));

// Do not edit below this line
module.exports = palindromes;
