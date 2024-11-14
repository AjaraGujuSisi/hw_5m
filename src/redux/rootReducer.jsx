

const initialState = {
    num: 0
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'plus':{
            return {
                ...state,
                num: state.num + 1
            }
        }
        case 'mega_plus':{
            return {
                ...state,
                num: state.num + 10
            }
            }
        case 'minus':{
            if (state.num > 0) {
                return {
                    ...state,
                    num: state.num - 1
                }
            }
            break
        }
        case 'mega_minus': {
            if (state.num > 0) {
                return {
                    ...state,
                    num: state.num - 10
                }
            }
            break
        }
        case 'reset':{
            return {
                ...state,
                num: 0
            }
        }
        default: {
            return state;
        }
    }
}

