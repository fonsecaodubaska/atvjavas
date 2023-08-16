function ehPalindromo(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    const reversedStr = str.split("").reverse().join("");
  
    return str === reversedStr;
  }
  
  console.log(ehPalindromo("radar"));   // true
  console.log(ehPalindromo("banana"));  // false
  console.log(ehPalindromo("A man, a plan, a canal, Panama"));  //true