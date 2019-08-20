/*Given a number from 0 to 999,999,999,999, spell out that number in English.
* Instructions:
* Handle the basic case of 0 through 99.
* If the input to the program is 22, then the output should be 'twenty-two'.
* Your program should complain loudly if given a number outside the blessed range.
* Some good test cases for this program are:
0
14
50
98
-1
100
*/
function threeDigits(number){
	var str ="";
	var hundred = Math.floor(number/100);
	var ten = Math.floor((number-hundred*100)/10);
	var decimal = number - hundred*100 - ten*10;

	//Hundreds
	if (hundred >= 1){
		str += numTable[hundred]+" Hundred ";
	}
	if (hundred == 0){
		str += "";
	}

	//Tens
	if (ten >= 2){
		str += numTable[ten*10]+" ";
		if(decimal > 0){
			str += numTable[decimal]+" ";
		}
		if(decimal == 0){
			str += "";
		}
	}
	if (ten >= 1 && ten < 2){
		str += numTable[(number-hundred*100)]+" ";
	}
	if (ten == 0){
		str += "";
	}

	// Decimals
	if (decimal >= 1 && ten < 1){
		str += numTable[decimal]+" ";
	}
	if (decimal == 0){
		str += "";
	}
	return	str;
}

function billions(number){
	if(billion ==0){
		return "";
	}
	return threeDigits(number)+" Billion ";
}

function millions(number){
	if(million ==0){
		return "";
	}
	return threeDigits(number)+" Million ";
}

function thousands(number){
	if(thousand ==0){
		return "";
	}
	return threeDigits(number)+" Thousand ";
}

function hundreds(number){
	return threeDigits(number);
}

var numTable = {
	1 : "One",
	2 : "Two",
	3 : "Three",
	4 : "Four",
	5 : "Five",
	6 : "Six",
	7 : "Seven",
	8 : "Eight",
	9 : "Nine",
	10 : "Ten",
	11 : "Eleven",
	12 : "Twelve",
	13 : "Thirteen",
	14 : "Fourteen",
	15 : "Fifteen",
	16 : "Sixteen",
	17 : "Seventeen",
	18 : "Eighteen",
	19 : "Nineteen",
	20 : "Twenty",
	30 : "Thirty",
	40 : "Fourty",
	50 : "Fifty",
	60 : "Sixty",
	70 : "Seventy",
	80 : "Eighty",
	90 : "Ninty",
}

var result = "";
var num = prompt("Enter a Number to spell", "0");
document.write(num, "<br/>", "<br/>");

if(num==0){
	result += "Zero";
}
else{
	var billion = Math.floor(num/1000000000);
	num -= billion*1000000000;

	var million = Math.floor(num/1000000);
	num -= million*1000000;

	var thousand = Math.floor(num/1000);
	num -= thousand*1000;

	result += billions(billion)+millions(million)+thousands(thousand)+hundreds(num)+".";
}

console.log(result);
document.write(result);











