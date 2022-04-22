function checkSpam(str) {
  // ваш код...
   str = str.toUpperCase();
  

  if (str.includes('XXX') || str.includes('1XBET') === true) {
    

    return true;
 
  }return false;
}
checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');