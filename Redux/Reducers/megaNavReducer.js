import {MEGANAV} from '../Constants'

const initialState = {
    loading: false,
    meganav: [],
    error: null
}

const megaNavReducer = (state = initialState, action) => {
    switch(action.type){
        case MEGANAV.LOAD : return {
            ...state,
            loading: true
        }

        case MEGANAV.RESPONSE: return {
            ...state,
            loading: false,
            meganav: action.payload
        }

        case MEGANAV.ERROR: return {
            ...state,
            loading:false,
            meganav: [],
            error: action.payload
        }

        default: return {
            ...state
        }
    }
}

export default megaNavReducer