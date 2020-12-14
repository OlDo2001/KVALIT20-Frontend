/**
 * Project: Uppgift-02-VG
 * File: script.js 
 * Klass: KVALIT20
 * Kurs: Frontend
 * Datum: 2020-12-11
 * Förtfatare: Olga Domorod
 */

/**   En funktion som visar ett värde på varje knapp när du trycker på den.
 *  En efter en (querySelector) på skärmen. */

function insert(num) {  
    document.querySelector('.display').value = document.querySelector('.display').value+num;
}

 /**   En funktion som ersätter uttrycket på skärmen med dess resultat. */ 

function equal() {
    let expresion = document.querySelector('.display').value;
 /**   eval - en funktion som utvärderar och utför ett uttryck. */ 
    if(expresion) {
      document.querySelector('.display').value = eval(document.querySelector('.display').value);
    }
}

 /**   En funktion som rensar skärmens innehåll */   
 
function clean() {
    document.querySelector('.display').value="";
}