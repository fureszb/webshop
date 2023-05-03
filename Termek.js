import { ADAT } from "./adatok.js";

class Termek {
  constructor(szuloElem) {
    const item = ADAT[0];
    const kontener = $("<div>");
    const nevElem = $("<div>").text(item.nev);
    const arElem = $("<div>").text(item.ar + " Ft");
    const kepElem = $("<img>").attr("src", item.kep);
    kontener.append(nevElem, arElem, kepElem);
    $(szuloElem).append(kontener);
  }
}

export default Termek;
