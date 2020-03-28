import {PLP} from '../Constants'

const initialState = {
    loading: false,
    plp: [],
    error: null
}

const plpReducer = (state = initialState, action) => {
    switch(action.type){
        case PLP.LOAD : return {
            ...state,
            loading: true
        }

        case PLP.RESPONSE : return {
            ...state,
            plp: action.payload
        }

        case PLP.ERROR : return {
            ...state,
            error: action.payload
        }

        default : return {
            ...state
        }
    }
}

export default plpReducer