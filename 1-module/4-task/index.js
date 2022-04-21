function checkSpam(str) {
  // ваш код...
   str = str.toUpperCase();
  

  if (str.includes('XXX') || str.includes('1XBET') === true) {
    console.log(str);

    return true;
 
  }return false;
}
checkSpam(str);