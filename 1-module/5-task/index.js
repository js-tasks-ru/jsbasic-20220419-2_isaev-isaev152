function truncate(str, maxlength) {

  return (str.length <= maxlength) ? str : str.slice(0, maxlength) + "...";
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Вот, что мне хотелось бы сказать на эту тему:', 10);
truncate('Всем привет!', 20);
