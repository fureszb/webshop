import { ADAT } from "./adatok.js";
class Termekek {
    constructor(){
        $(document).ready(function() {
			let fejlec = $("<h1>Név</h1><h1>Árak</h1><h1>Képek</h1>");
			tabla.append(fejlec);

		
            $.each(ADAT, function(index, item) {
				
			});

			$("#tarolo").append(tabla);
		});
    }
}

export default Termekek;