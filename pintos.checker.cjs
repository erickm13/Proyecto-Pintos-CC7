// @ts-check
/** Modifique las funciones para personalizar los fallos */

/** Condición que se debe cumplir para que
  * pase el test, inicialmente si tiene una
  * nota mayor o igual a 0 pasa el test
  * @param {number} grade es la nota actual
  * @param {number} total es la nota máxima
  * @returns {boolean} retorna true si el test
  * debe pasar*/
function threads(grade, total) {
  return grade >= 20
}

/** Condición que se debe cumplir para que
  * pase el test, inicialmente si tiene una
  * nota mayor o igual a 0 pasa el test
  * @param {number} grade es la nota actual
  * @param {number} total es la nota máxima
  * @returns {boolean} retorna true si el test
  * debe pasar*/
function userprog(grade, total) {
  return grade >= 0
}

/** Condición que se debe cumplir para que
  * pase el test, inicialmente si tiene una
  * nota mayor o igual a 0 pasa el test
  * @param {number} grade es la nota actual
  * @param {number} total es la nota máxima
  * @returns {boolean} retorna true si el test
  * debe pasar*/
function vm(grade, total) {
  return grade >= 0
}

/** Condición que se debe cumplir para que
  * pase el test, inicialmente si tiene una
  * nota mayor o igual a 0 pasa el test
  * @param {number} grade es la nota actual
  * @param {number} total es la nota máxima
  * @returns {boolean} retorna true si el test
  * debe pasar*/
function filesys(grade, total) {
  return grade >= 0
}

/** Imprime a pantalla el mensaje
  * @param {Function} print función que imprime a pantalla
  * @param {string} results es el texto completo
  * @param {number} grade es la nota que sacó
  * @param {number} total es la nota máxima*/
function showResults(print, results, grade, total) {
  print(`\x1b[33mEvaluación: ${grade}/${total}\x1b[0m\n`)
  print(results)
}

// ------------------------------------------------------------
// No modifique si no es necesario
// ------------------------------------------------------------

/** Esta línea se usa para extraer la nota y el total
  Ejemplo:
...
tests/filesys/base/Rubric                       30/ 30   30.0%/ 30.0%
--------------------------------------------- --- --- ------ ------
    Total                                                   90.5%/100.0%

extrae:
  grade: 90.5
  total: 100.0
*/
/** @type {RegExp} */
const gradeExpr = /Total(\t|\s)+(?<grade>\d+[.]\d)+%\/(?<total>\d+[.]\d+)%/mg

module.exports = { threads, userprog, vm, filesys, showResults, gradeExpr }
