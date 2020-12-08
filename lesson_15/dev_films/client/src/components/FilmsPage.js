import React, {useState,useEffect} from "react"
import AdminRoute from '../components/AdminRoute'
import api from "../api"
import FilmsList from "./films"
import {AppContext} from './App'
import FilmForm from "./forms/FilmForm"
import {orderBy, find} from 'lodash';

const FilmsPage = (props) => {
    const [films,setFilms] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [showAddForm,setShowAddForm] = useState(true);

    useEffect(() => {
        api.films
            .fetchAll()
            .then(films => {
                setFilms(sortFilms(films));
                setIsLoading(false)
            })
    }, [])


    const sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

    const toggleFeatured = id => {
        const film = find(films, {_id: id})

        return updateFilm({...film, featured: !film.featured})
    }

    const saveFilm = film => (film._id ? updateFilm(film) : addFilm(film))

    const addFilm = filmData =>
        api.films.create(filmData).then(film => {
            setFilms(sortFilms([...films, {...film}]));
            setIsLoading(false);
        })


    const updateFilm = filmData =>
        api.films.update(filmData).then(film => {
            setFilms(films.map(item => (item._id === film._id ? film : item)));
            setShowAddForm(false);
        })

    const deleteFilm = film =>
        api.films.delete(film).then(() =>
            setFilms(sortFilms(films.filter(item => item._id !== film._id)))
        )

    const numCol = props.location.pathname === "/films" ? "sixteen" : "ten";

    return (
        <AppContext.Provider
            value={{
                toggleFeatured: toggleFeatured,
                deleteFilm: deleteFilm,
                user: props.user,
            }}
        >
            <div className="ui stackable grid">
                <AdminRoute  path="/films/new"
                             user={props.user}
                             render={() => (
                                 <div className="six wide column">
                                     <FilmForm submit={saveFilm} film={{}} />
                                 </div>
                             )}
                />

                <AdminRoute  path="/films/edit/:_id"
                             user={props.user}
                             render={({match}) => (
                                 <div className="six wide column">
                                     <FilmForm  submit={saveFilm}
                                                 film={find(films, {_id: match.params._id}) || {}}
                                     />
                                 </div>
                             )}
                />


                <div className={`${numCol} wide column`}>
                    {
                        isLoading ? (
                            <div className="ui icon message">
                                <i className="notched circle loading icon" />
                                <div className="content">
                                    <div className="header">films loading</div>
                                </div>
                            </div>
                        ) : (
                            <FilmsList films={films} deleteFilm={deleteFilm} />
                        )
                    }
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default FilmsPage
