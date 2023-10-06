import axios from "axios";
import * as actionType from '../constants/cardConstant'

const URL = 'http://localhost:8000';
export const addToCard = (id, quantity) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        console.log('vjdshvjkdfhvjbhdcb jhvsbvbchj jcdbv',data)
        
       return dispatch({ type: actionType.ADD_TO_CARD, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: actionType.ADD_TO_CARD_ERROR, payload: error.message })
    }
}

export const removeFromCard = (id) => (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CARD, payload: id })

}