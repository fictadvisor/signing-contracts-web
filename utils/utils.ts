import axios from "axios";

export const LETTERS: Array<string> = [
  'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я',
  'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я',
  '\'', '.', ',', ' ',
]

export const REGIONS: Array<string> = [
  'Київська обл.', 'Вінницька обл.', 'Волинська обл.', 'Дніпропетровська обл.','Донецька обл.','Житомирська обл.',
  'Закарпатська обл.','Запорізька обл.','Івано-Франківська обл.','Кіровоградська обл.', 'АР Крим', 'Луганська обл.',
  'Львівська обл.', 'Миколаївська обл.','Одеська обл.','Полтавська обл.', 'Рівненська обл.', 'Сумська обл.','Тернопільська обл.',
  'Харківська обл.', 'Херсонська обл.', 'Хмельницька обл.','Черкаська обл.', 'Чернівецька обл.','Чернігівська обл.'
]

const dataObject: object = {};

export function saveValue(name: string, value: any) {
  dataObject[name] = value;
  console.log(dataObject);
}

export function checkValue(name: string){
  return dataObject[name];
}

export function clearParent(){
  for (const name in dataObject) {
    if (name.startsWith('parent_')) {
      dataObject[name] = '';
    }
  }
}

export async function downloadDocx() {
  console.log('wow')
  const {data} = await axios.post('http://localhost:5000/documents/download', {data: dataObject}, {
    // auth: {
    //   username: 'hoshion',
    //   password: 'wow',
    // }
  });
  console.log('reply');
  window.open(`http://localhost:5000/documents/download?id=${data.id1}`);
  console.log('open1');
  window.open(`http://localhost:5000/documents/download?id=${data.id2}`);
  console.log('open2');
}


