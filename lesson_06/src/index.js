// #region Setup
const URL = 'https://jsonplaceholder.typicode.com/';
const postTable = document.getElementById('postTable');
const spinner = document.getElementById('spinner');

let postsHTML = '';


function queryApi(endPoint) {
	return fetch(URL + endPoint)
	.then(result => result.ok ? result.json() : Promise.reject("unsuccessful request"))
}

async function getUserInfo(userId, postId) {
	try {

		const user = await queryApi('users/' + userId).then(user => {
			return user;
		});

		let userHTML = `<div class="col-12">`;

		for (let key in user) {
			if (typeof user[key] != 'object') {
				userHTML +=  `<div class="d-flex"><span>${key}:</span> <span>${user[key]}</span></div>`; 
			}
		}

		userHTML += `</div>`;

		const post = document.getElementById(postId);

		post.innerHTML += userHTML;

		console.log(user);

	} catch (e) {
		console.log(e);
	}
}

async function getPosts() {
	try {

		const posts = await queryApi('posts').then(posts => {
			return posts;
		})

		for (let i = 0; i < 29; i++) {
			postsHTML += `<div class="row mb-4" id="${posts[i].id}"><div class="col-4">${posts[i].title}</div><div class="col-6">${posts[i].body}</div><div class="col-2"><a href="#" data-post="${posts[i].id}" data-user="${posts[i].userId}" class="userLink">User info</a></div></div>`;
		}

		postTable.innerHTML = postsHTML;

	} catch (e) {
		console.log(e);
	}
}


getPosts();

postTable.innerHTML = "Loading ...";

postTable.addEventListener('click', function(e) {
	if (e.target.className == "userLink") {
		const post = e.target.dataset.post;
		const user = e.target.dataset.user;
		getUserInfo(user, post);
	}
})