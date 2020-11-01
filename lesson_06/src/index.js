// #region Setup
const URL = 'https://jsonplaceholder.typicode.com/';
const postTable = document.getElementById("postTable");
const spinner = document.getElementById('spinner');

function queryApi(endPoint) {
	return fetch(URL + endPoint)
	.then(result => result.ok ? result.json() : Promise.reject("unsuccessful request"))
}

let postsHTML = '';

async function getPosts() {
	try {
		const [posts, users] = await Promise.all([queryApi('posts'), queryApi('users')]);

		console.log(posts)

		for (var i = 0; i < 9; i++) {
			postsHTML += `<div class="row mb-4"><div class="col-4">${posts[i].title}</div><div class="col-6">${posts[i].body}</div><div class="col-2"><a href="#">${posts[i].userId}</a></div></div>`;
		}

		postTable.innerHTML = postsHTML;
	} catch (e) {
		console.log(e);
	}
}

getPosts()
postTable.innerHTML = "Loading ...";
