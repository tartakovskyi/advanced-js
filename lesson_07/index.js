const root = document.getElementById("root");

class App extends React.Component {

	constructor(props) {
		super();
		this.state = {
			users: []
		}
	}

	getUsers() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			this.setState({ users : users });
		})
		.catch(error => console.log(error));

	}

	render() {
		this.getUsers();
		console.log(this.state.users)
		return this.state.users.map(user => {
			return (
				<div key={user.id} className="row">
				<div className="col-1">{user.id}</div>
				<div className="col-3">{user.name}</div>
				<div className="col-2">{user.username}</div>
				<div className="col-3">{user.email}</div>
				<div className="col-3">{user.phone}</div>
				</div>   
				);
		});
	}
}

ReactDOM.render(<App />, root)