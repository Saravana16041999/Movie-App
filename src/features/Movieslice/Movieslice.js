import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
  
let URl = `https://movies-app.prakashsakari.repl.co/api/movies`


  export const getmovie = createAsyncThunk("movie/getmovies",async()=>{
  return fetch(URl).then((res)=> res.json())
  })




export const MovieSlice = createSlice({
    name :'Movies',
    initialState : {
      Movies : [] ,
      Isloading :false,
      Open : false,
      Categorys : ["Action","Crime","Drama","Adventure"]
  },
  
    extraReducers : {
      [getmovie.pending]: (state) =>{
        state.Isloading = true
      },
      [getmovie.fulfilled] : (state,action)=>{
        state.Isloading = false
        state.Movies = action.payload
      },
      [getmovie.rejected] : (state)=>{
        state.Isloading = false
      }

    },
    reducers :{
      settingOpen : (state)=>{
          state.Open = true;
          
      },
      settingClose : (state)=>{
        state.Open = false;
      }
    }
})


export default MovieSlice.reducer

export const { settingOpen , settingClose,} = MovieSlice.actions