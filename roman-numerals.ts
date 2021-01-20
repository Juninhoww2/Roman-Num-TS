export default class RomanNumerals {
	static roman(num: number): string {
	  let romanNum = '';
       
	  const appendNumeral = (roman: string, chunk: number): void => {
	    romanNum += roman;
	    num -= chunk;
	  };
       
	  const calculatePlace = (place: number, ...romans: string[]): void => {
	    const [nines, fives, fours, ones] = romans;
	    while (num >= place) {
	      const count = Math.floor(num / place);
	      if (count === 9) {
	        appendNumeral(nines, 9 * place);
	      } else if (count >= 5) {
	        appendNumeral(fives, 5 * place);
	      } else if (count === 4) {
	        appendNumeral(fours, 4 * place);
	      } else if (num >= place) {
	        appendNumeral(ones, place);
	      }
	    }
	  };
       
	  if (num >= 1000) {
	    const thousands = Math.floor(num / 1000);
	    appendNumeral('M'.repeat(thousands), thousands * 1000);
	  }
	  calculatePlace(100, 'CM', 'D', 'CD', 'C');
	  calculatePlace(10, 'XC', 'L', 'XL', 'X');	
	  calculatePlace(1, 'IX', 'V', 'IV', 'I');
	  return romanNum;
	}
       }	

