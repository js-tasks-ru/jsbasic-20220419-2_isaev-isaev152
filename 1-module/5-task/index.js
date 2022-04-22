function truncate(str, maxlength) {
  // ваш код...
  return str.length <= maxlength ? str : str.slice(0, maxlength) + "...";
}
trunc('Вот, что мне хотелось бы сказать на эту тему:', 20);
trunc('Всем привет!', 20);
