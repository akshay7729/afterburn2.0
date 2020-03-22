import Axios from 'axios'

export const searchAutocompleteApi = async () => {
    try{
        return Axios.get('Data/Search.json')
                .then(function(response){
                    return response.data
                })
                .catch(error => {
                    console.log('search api failed error', error.message)
                    return error;
                })
    }catch(e){
        console.log('search api error msg', e)
    }
}