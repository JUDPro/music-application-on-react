import {createSlice, configureStore} from '@reduxjs/toolkit';

type MusicSliceType = {
    musics: string[];
}

const musicSplice = createSlice({
    name: 'musics',
    initialState: {
        musics: []
    },

    reducers: {
        save: (state: MusicSliceType, action) => {
            state.musics = [...state.musics, action.payload]
        },
        delete: (state, action) => {
            state.musics.splice(action.payload, 1);
            state.musics = [...state.musics]
        },
    }
});

const store = configureStore({
    reducer: {
        musics: musicSplice.reducer
    }
});

export default store;
export const actions = musicSplice.actions;