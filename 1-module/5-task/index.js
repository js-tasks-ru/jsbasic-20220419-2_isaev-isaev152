function truncate(str, maxlength) {

  return str.length > maxlength ? str.slice(str.charAt(0), maxlength - 1) + "…" : str;
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);

truncate('Всем привет!', 20);
