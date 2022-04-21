function truncate(str, maxlength) {
  // ваш код...
  return str.length <= strLength ? str : str.slice(0, strLength) + "...";
}
trunc('Вот, что мне хотелось бы сказать на эту тему:', 20);
trunc('Всем привет!', 20);
