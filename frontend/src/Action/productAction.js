import Axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstant"
export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/products')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message })
    }
}


export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
    try {
        const { data } =await  Axios.get(`/api/products/${productId}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                err.responses && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}