/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 let rows = [
  {
    name: 'Ilia',
    age: 25,
    salary: 1000,
    city: 'Petrozavodsk'
  },
  {
    name: 'Vasya',
    age: 14,
    salary: 1500,
    city: 'Moscow'
  },
  {
    name: 'Ivan',
    age: 22,
    salary: 100,
    city: 'Bryansk'
  },
  {
    name: 'Petya',
    age: 45,
    salary: 990,
    city: 'Chita'
  }
];
export default class UserTable {
  constructor(rows) {
    this.row = rows;
    this.elem = document.createElement('table');
    this.render();
    this.deleteRows();
  }
  render() {
    this.elem.innerHTML =  `
  <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
        </tr>
    </thead>
    <tbody>
        ${this.row
          .map((item) => {
            return `
          <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
        </tr>
          `;
          }).join('')
          }
    </tbody> `;
  };
  deleteRows() {
  
    const buttons = this.elem.querySelectorAll('button');
    for (const button of buttons) {
      button.addEventListener('click', (event) => {
        event.target.closest('tr').remove(); 
      });
    }
  }
}
    // let table = new UserTable(rows);
    // document.body.append(table.elem);
   


 