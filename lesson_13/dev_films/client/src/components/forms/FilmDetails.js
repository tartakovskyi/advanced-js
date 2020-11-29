import React, {Component} from 'react'
import ReactImageFallback from "react-image-fallback";
import {Link} from 'react-router-dom'
import {AppContext} from '../App'
import Featured from "./Featured"
import PropTypes from "prop-types"

const initialData = {
    title: '',
    description: '',
    director: '',
    duration: '',
    price: '',
    img: '',
    featured: false,
    _id: null,
}

class FilmDetails extends Component {
    state = {
        data: initialData,
        errors: {},
        isLoading: false,
        isRedirect: false,
    }

    componentDidMount() {
        if (this.props.film._id) {
            this.setState({data: this.props.film})
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {film} = props

        if (film._id && film._id !== state.data._id) {
            return {
                data: film,
                error: {}
            }
        }

        if (!film._id && state.data._id !== null) {
            return {
                data: initialData,
                error: {}
            }
        }

        return null
    }

    render() {
        return (
	        <div className="ui card">
		        <div className="image">
			        <span className="ui green label ribbon">{film.price}$</span>
			        <Featured featured={film.featured} filmId={film._id} />
			        <img src={film.img} alt={film.title} />
		        </div>
	            <div className="content">
	                <div className="header">
	                    {film.title}
	                </div>
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
	                {confirm ? (
	                    <div className="ui two buttons">
	                        <span  className="ui red basic button"  onClick={() => deleteFilm(film)}>
	                            <i className="ui icon check" /> YES
	                        </span>
	                        <span className="ui grey basic button" onClick={hideConfirm}>
	                            <i className="ui icon trash" /> NO
	                        </span>
	                    </div>
	                    ) : (
	                    <div className="ui two buttons">
	                        <Link to={`/films/edit/${film._id}`} className="ui green basic button">
	                            <i className="ui icon edit" />
	                        </Link>
	                        <span className="ui red basic button" onClick={showConfirm}>
	                            <i className="ui icon trash" />
	                        </span>
	                    </div>
	                )}
	            </div>
	        </div>
    	)
    }
}

FilmDetails.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
    }).isRequired,
}

export default FilmDetails;
