import { MEGANAV } from "../Constants";

const megaNavLoad = () => {
    return {
        type: MEGANAV.LOAD
    }
}

const megaNavSuccess = meganav => {
    return {
        type: MEGANAV.RESPONSE,
        payload: meganav
    }
}

const megaNavError = error => {
    return {
        type: MEGANAV.ERROR,
        payload: error
    }
}

export {
    megaNavLoad,
    megaNavError,
    megaNavSuccess
}
