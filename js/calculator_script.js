var digit_array = [];
var disply_str = '';

function onAddDigit(digit) {
	digit_array.push(digit);
	displyOperation();
}

function displyOperation() {
	var str = digit_array.toString();
	disply_str = str.replace(/,/g,'');
	//console.log(digit_array);
	//console.log(str);
	//console.log(disply_str);
	$('#disply').val(disply_str);
}

function onClearCalculator() {
	for (var i = digit_array.length; i > 0; i--) {
		digit_array.pop();
 	}
	displyOperation();
}

function onCalculate() {
	var cal_array = disply_str.split('x');
	console.log(cal_array);
	$('#disply').val('Developing continue...');
	//var mp = cal_array.indexOf('x');
}
