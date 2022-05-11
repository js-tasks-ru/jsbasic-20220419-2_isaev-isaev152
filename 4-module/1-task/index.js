let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin',
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor',
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael',
  },
];

function makeFriendsList(friends) {
  const ul = document.createElement('UL');
  for (let item of friends) {
    const li = document.createElement('LI');
    li.textContent = `${item.firstName} ${item.lastName}`;
    ul.append(li);
  }
  return ul;
}
makeFriendsList(friends);
