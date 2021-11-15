
////////////////////////////////////////////////////////////////////////////////
// bresenham.js
//
// Bearbeiten Sie diese Datei für den Praktikumsteil "Bresenham Line".
//
// HS Duesseldorf - Fachbereich Medien - Grundlagen d. Computergrafik
//
// Studiengang: BMI
// Gruppe     : N
// Autor 1    : Blumenrath, Kim
// Autor 2    : Fitzen, Julian
// Autor 3    : Hüls, Jan
// Autor 4    : Kiesche, Valentin
// Autor 5    : Lamsalam, Chaymae
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// drawLine(x0, y0, x1, y1)
// Diese Funktion soll eine Linie von (x0, y0) nach (x1, y1) zeichnen.
// Implementieren Sie dazu den Bresenham-Line-Algorithmus für alle Oktanten
// in dieser Funktion. Einen Punkt zeichnen Sie mit setPixel(x,y).
////////////////////////////////////////////////////////////////////////////////


function drawLine(x0, y0, x1, y1) {
  /**
   * Durch Math.abs() wird der Betrag von dem Ergebnis der Rechnung genommen
   */

   let swap = false;

   if(Math.abs(y1 - y0) > Math.abs(x1 - x0) ) {
    let tmp = x0;
    x0 = y0;
    y0 = tmp;
    tmp= y1;
    y1 = x1;
    x1 = tmp;
    swap = true;
  }

  let y = y0;
  let x = x0;
  let a = Math.abs(y1 - y0); 
  let b = -Math.abs(x1 - x0);
  let q = 2*a+b;
  let q_step = 2*(a+b);
  let q_equal = 2*a;

  let incx =1; //Inkrementierung auf der x-Achse (nach rechts positiv, nach links negativ)
  let incy =1; //Inkrementierung auf der y-Achse (nach rechts positiv, nach links negativ)

  if(x0>=x1){
    incx = -1;
  }

  if(y0>=y1){
    incy = -1;
  }
  
  /*
  * Dieser Teil zeichnet die Linie.
  * Dadurch das wir nun incx/incy eingebaut (Sie ersetzen das ehemalige ++) haben funktionieren die Oktanten 4,5,8 nun auch.
  * Durch y
  **/
  for(x; x !== x1; x += incx) {
    if (swap) {
      setPixel(y,x)
    } else {
      setPixel(x, y);
    }

    if (y0 === y1) {
      break;
    }

    if(q < 0) {
      q = q + q_equal;
    } else {
      q = q + q_step;
      y += incy; 
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
// example(i)
// Diese Funktion dient als Codebeispiel.
// Sie wird beim Laden der Seite aufgerufen und kann entfernt werden.
////////////////////////////////////////////////////////////////////////////////
function example(i) {
  let y = i + 2;
  for (let x = 0; x < 400; x++) {
    y--;
    if (y < -i) {
      y = i;
    }
    setPixel(x, Math.abs(y));
  }
}
