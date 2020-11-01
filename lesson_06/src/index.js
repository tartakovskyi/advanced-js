// #region Setup
const URL = 'https://jsonplaceholder.typicode.com/';
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');
​

​
function queryApi(endPoint) {
	return fetch(URL + endPoint)
	.then(result => result.ok ? result.json() : Promise.reject("unsuccessful request"))
}
​
/*async function fetchAll() {
	console.log("before queries inside fetch all");
	try {
		const [{results: films}, {results: planets}] = await Promise.all([queryApi('films'), queryApi('planets')]);
		console.log("after queries inside fetch all");
		output.innerHTML = `Films: ${films.length}, Planets: ${planets.length}`;
	} catch (e) {
		console.log(e);
	} finally {
		spinner.remove()
	}
}
​
fetchAll()*/
console.log(queryApi('posts'));
​
output.innerHTML = "Loading ...";
