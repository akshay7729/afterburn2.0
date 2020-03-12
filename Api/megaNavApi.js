import Axios from 'axios'

export const MegaNavApi = async () => {
    try{
        return Axios
            .get('https://demo4999203.mockable.io/octane/mega-menu')
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.log('meganav api error')
                return error;
            });
    }catch(e){
        console.log('meganav error', e)
    }
}