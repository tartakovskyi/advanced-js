import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import api from '../../api'

const FilmDetails = ({match}) => {

	const { params: { _id } } = match;

	const [film, setFilm] = useState({})

	useEffect(() => {
		api.films.fetchById(_id).then(({film}) => {setFilm(film)})
	}, [_id]
	)

	return (
		<div>
			<div className='six wide column'>
				<div className="ui card">
            		<div className="image">
	                    <span className="ui green label ribbon">{film.price}$</span>
	                    <img src={film.img} alt={film.title} />
	                </div>

		            <div className="content">
		                <span className="header">
		                    {film.title}
		                </span>
		                <p>{film.description}</p>
		                <div className="meta">
		                    <i className="icon users" />
		                    {film.director}
		                    <span className="right floated">
					         	<i className="icon wait right" />
					            {film.duration} min
					        </span>
		                </div>
		            </div>
		            <div className="extra content">
		                <div className="ui two buttons">
	                        <Link to={`/films/edit/${film._id}`} className="ui green basic button">
	                            <i className="ui icon edit" />
	                        </Link>
                		</div>
	            	</div>
	        	</div>
			</div>
		</div>
	)

	
}

export default FilmDetails