import axios from 'axios'

export default {
    films: {
        fetchAll: () => axios.get('/api/films').then(result => result.data.films),
        fetchById: film => axios.get(`/api/films/${film}`).then(result => result.data),
        create: film => axios.post('/api/films', {film}).then(result => result.data.film),
        update: film => axios.put(`/api/films/${film._id}`, {film}).then(result => result.data.film),
        delete: film => axios.delete(`/api/films/${film._id}`),
    },
}