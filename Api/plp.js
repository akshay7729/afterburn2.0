import Axios from 'axios'

export const PlpApi = async () => {
    try{
        return Axios
            .get('Data/Plp.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.log('plp api error')
                return error;
            });
    }catch(e){
        console.log('plp api error', e)
    }
}