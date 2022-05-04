function getMinMax(str) {
  let result = {};
  let arr = str.split(' ');
  let arrnum = arr.filter((item) => +item);
  let max = Math.max.apply(null, arrnum);
  let min = Math.min.apply(null, arrnum);
  result.min = min;
  result.max = max;
  return result;
}
