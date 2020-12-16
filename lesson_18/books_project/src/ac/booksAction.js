import C from "../constants";

export const selectCatAction = id => ({
    type: C.SELECT_CATEGORY,
    payload: {id}
})

export const addBookAction = book => ({
    type: C.ADD_BOOK,
    payload: book
})