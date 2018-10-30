var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

var aantalKleineSchalen = 0;
var aantalGroteSchalen = 0;

const prijsFris = 2.20;
const prijsBier = 2.50;
const prijsWijn = 4.50;

const prijsKleineSchalen = 6.00;
const prijsGroteSchalen = 10.00;



bestelling();








function bestelling () {
	while (bestelling != 'stop') {
		var bestelling = prompt ('Wat wilt u bestellen?')

		if (bestelling == 'fris') { 
			aantalFris = aantalFris + parseInt(prompt ('Hoeveel fris wilt u toevoegen aan uw bestelling?'))
		}

		else if (bestelling == 'bier') { 
			aantalBier = aantalBier + parseInt (prompt ('Hoeveel bier wilt u toevoegen aan uw bestelling?'))
		}

		else if (bestelling == 'wijn') { 
			aantalWijn = aantalWijn + parseInt(prompt ('Hoeveel wijn wilt u toevoegen aan uw bestelling?'))
		}

		else if (bestelling == 'snack') { 
			input = parseInt(prompt ('Hoeveel bitterballen wilt u toevoegen (8 of 16)?'))
			
			if (input  == '8') {
				aantalKleineSchalen = aantalKleineSchalen + parseInt(prompt ('Hoeveel schalen van 8 bitterballen wilt u toevoegen aan uw bestelling?'))
			}
			else if (input  == '16') {
				aantalGroteSchalen = aantalGroteSchalen + parseInt(prompt ('Hoeveel schalen van 16 bitterballen wilt u toevoegen aan uw bestelling?'))
			}
		}
		
		else if (bestelling == 'stop'){
   			prijsTotaal();
        }
   		else{
    		alert('wij hebben geen ' + bestelling + ' vandaag.')
    	}
	}
}








function prijsTotaal() {
	document.write ('Prijs Fris: € '+(prijsFris * aantalFris) + '<br>')
	document.write ('Prijs Bier: € '+(prijsBier * aantalBier) + '<br>')
	document.write ('Prijs Wijn: € '+(prijsWijn * aantalWijn) + '<br>')
	document.write ('Prijs Bitterballen: € '+ (prijsKleineSchalen * aantalKleineSchalen + prijsGroteSchalen * aantalGroteSchalen) + '<br>')
	document.write (' ________________________________ <br><br>Totale Prijs: €' + (prijsKleineSchalen * aantalKleineSchalen + prijsGroteSchalen * aantalGroteSchalen + prijsWijn * aantalWijn + prijsBier * aantalBier + prijsFris * aantalFris))
}






