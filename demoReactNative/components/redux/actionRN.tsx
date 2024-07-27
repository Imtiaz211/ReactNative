import { ADD_TO_CART, REMOVE_FROM_CART } from './constantRN'

export function addToCard(item) {
    return {
        type: ADD_TO_CART,
        data: item
    }
}
export function removeFromCard(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}