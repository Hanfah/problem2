//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount(str) {
	var count = 0;
	var vowels = "aeiuo";

	for (var i = 0; i < str.length; i++){
		if (vowels.indexOf(str[i]) > -1) {
			count++;
		}
	}

	console.log(count);
}

vowelCount("dogs and cats are best friends");