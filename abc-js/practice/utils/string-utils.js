/** Модуль предназначен для изучения основ программирования.
 * Все эти функции уже присутствуют в js, поэтому практической пользы
 * от данной реализации мы не получим. Но основная цель которая
 * ставится данными задачами, это получение студентом:
 * 1. научиться находить алгоритм решения поставленной задачи
 * и переводить их в компьютерные инструкции.
 * 2. изучить внутреннее строение популярных функции.
 * 3. поиск решений задач в условиях ограничений.
 *
 * Разрешения, можно использовать:
 * 1. использовать все встренные операторы (ветвления, циклы, логические и т.д.);
 * 2. получение доступа к символу через его индекс anyString[i];
 * 3. получение длины объекта anyString.length;
 * 4. использование объекта Math, но особо упоротые могут постараться
 * обойтись без них;
 *
 * Ограничения, нельзя использовать:
 * 1. Любые встроенные функции и атрибуты строк;
 * 2. Любые другие встроенные функции вроде parseInt, toString и т.д.;
 * 3. Объекты, в том числе массивы (для string-utils, number-utils, boolean-utils);
 */

//** символы с данной константы будут удалятся функциями
// trim(), trimLeft(), trimRight(). */
const TRIM_SYMBOLS = ' \n\t\v'; 

/** по индексу проверяет совпадают ли все остальные символы
 * между text и searchString и возвращает булевое значение.*/
export function isMatch(firstText, secondText) {

}

/** Переводит переданный аргумент в тип строки.
 * Можно переводить в строку только простые типы:
 * number, boolean, string, undefined, null.
 * Другие типы вызовут ошибку. */
export function toString(value) {

}

/** Возвращает "развернутую" копию text */
export function reverse(text) {

}

/** Возвращает text повторенный count раз. */
export function repeat(text, count) {

}

/** Возвращает копию строки с удаленными пробелами в начале и конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trim(text) {

}

/** Возвращает копию строки с удаленными пробелами в начале строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimLeft(text) {

}

/** Возвращает копию строки с удаленными пробелами в конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimRight(text) {

}

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {

}

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр position задает начальную позицию с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, position) {

}

/** Возвращает строку text, где первое вхождение subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replace(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replace(text, subStr, newSubStr) {

}

/** Возвращает строку text, где все вхождения subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replaceAll(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replaceAll(text, subStr, newSubStr) {

}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {

}

/** Возвращает копию text увеличенный до длины maxLength
 * символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {

}
