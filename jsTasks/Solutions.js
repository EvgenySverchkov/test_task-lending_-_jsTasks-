//////////////////////////////////Exercise 1///////////////////////////////////////////////////////////
function foundValue(arrObj, key){
	return arrObj.map((item, idx)=>item[key]);
}
const someArr = [{ 'name': 'Oleg', 'age': 36 }, { 'name': 'Dmitry', 'age': 40 }];
console.log("Exercise 1");
console.log(foundValue(someArr, 'name'));
//////////////////////////////////Exercise 2///////////////////////////////////////////////////////////
function isPalindrome(str){
	let buff = str;
	return str.split('').reverse().join('')===buff;
}
console.log("Exercise 2");
console.log(isPalindrome('anna'));//true
console.log(isPalindrome('asd'));//false
//////////////////////////////////Exercise 3///////////////////////////////////////////////////////////
function byField(str){
	return function(a, b){
		return a[str]>b[str]?1:-1;
	};
}

let users = [
  { name: "Vasya", age: 22, surname: "Vasechkin" },
  { name: "Petya", age: 18, surname: "Petechkin" },
  { name: "Ivan", age: 33, surname: "Sidorov" }
];
console.log("Exercise 3");
users.sort(byField('name')); 
users.forEach(user => console.log(user.name)); //Ivan, Petya, Vasya 

users.sort(byField('age')); // 18,22,33
users.forEach(user => console.log(user.age)); //18,22,33
//////////////////////////////////Exercise 4///////////////////////////////////////////////////////////
function passwordValidation(password){
	return (/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z*]{12,}/.test(password));
}
console.log("Exercise 4");
console.log(passwordValidation('1qaz3EDC5tgb'));
//////////////////////////////////Exercise 5///////////////////////////////////////////////////////////
var domains = ['snbforums.com','hdmekani.com','gezenbilir.com','maxicep.com','windowsforum.com','reibert.info','computerforum.de','forum.adguard.com','forum.digitalfernsehen.de','reibert.info','snbforums.com','torrentcinn.net','hdmekani.com','windowsforum.com'];

function uniqueValues(dataArr){
	return dataArr.filter((item,idx, arr)=>{
		for(let i=idx+1; i<arr.length; i++){
			if(item===arr[i]){
				return false;
			}
		}
		return true;
	});
}
console.log("Exercise 5");
console.log(uniqueValues(domains));