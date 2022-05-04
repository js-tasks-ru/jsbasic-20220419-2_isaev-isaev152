function camelize(str) {
  let wordArr = str.split('-');
  for (let i = 0; i < wordArr.length; i++) {
    if (i == 0) continue;
    let charArr = wordArr[i].split('');
    charArr[0] = wordArr[i].charAt(0).toUpperCase();
    wordArr[i] = charArr.join('');
  }
  myStr = wordArr.join('');
  return myStr;
}
