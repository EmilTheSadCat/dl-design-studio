export const initialLang = {lang: 'PL'};

export const langReducer = (state, action) => {
    switch(action.type) {
        case 'EN':
            return {lang: 'EN'};
        case 'PL':
            return {lang: 'PL'};
        default: 
            return state;
    }
};


