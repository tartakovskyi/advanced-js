import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { mapToArr} from "../../utils"
import {Redirect} from 'react-router-dom'
import {addBookAction, editBookAction} from '../../ac/booksAction'

const BookForm = ({match, books, categories, addBookAction, editBookAction}) => {
    const [redirect, setRedirect] = useState(false)
    const { register, handleSubmit, errors, control, setError, getValues } = useForm()
    const bookData = match.params.id && books.filter(book => book._id == match.params.id).length ? books.filter(book => book._id == match.params.id)[0] : null
    const options = [{value: '-1', label: 'Choose category'}]
    let selectedCatIndex = 0
    categories.map(
        (cat, index) => {
            options.push({value: cat._id, label: cat.title})
            if (bookData && bookData.categoryId == cat._id) selectedCatIndex = index + 1
        }
    )

    function onSubmit(data, e) {
        e.preventDefault()

        if (errors.categoryId) {
            setError('categoryId')

            return
        }

        data = {...data, categoryId: data.categoryId.value}

        if (bookData) {
            data = {...data, _id: bookData._id}
            editBookAction(data)       
        } else {
            addBookAction(data)
        }
        setRedirect(true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
            {redirect && <Redirect to={'/'} />}
            <div className="form-group">
                <label html-for="title">Title</label>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    defaultValue={bookData ? bookData.title : ''}
                />
                {errors.title && "Title is required."}
            </div>
            <div className="form-group">
                <label html-for="desc">Description</label>
                <textarea
                    name="desc"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    defaultValue={bookData ? bookData.desc : ''}
                />
                {errors.desc && "Description  is required."}
            </div>
            <Controller
                as={<Select options={options}/>}
                control={control}
                ref={{ required: true}}
                onChange={([selected]) => selected }
                name={'categoryId'}
                defaultValue={options[selectedCatIndex]}
            />
            {errors.categoryId && 'Categories  is required.'}

            <div className="form-group">
                <button onClick={() => {
                    const { categoryId } = getValues()

                    if (categoryId.value === '-1') {
                        setError('categoryId', 'No choosen category')
                    }
                }}
                className="btn btn-primary">Submit
                </button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks
    const {books} = state

    return {
        categories: mapToArr(categories),
        books: books
    }
}

export default connect(mapStateToProps, {addBookAction, editBookAction})(BookForm)
