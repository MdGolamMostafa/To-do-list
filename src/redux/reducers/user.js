const userState = {}

export const user = (state = userState , action) =>{
    switch(action.type){
        case 'STORE_USER_DATA':
                return action.data
           

            case 'CLEAR_USER':
                return {};


            default: 
                return state;
    }
}