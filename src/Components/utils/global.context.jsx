import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";


export const GlobalContext = createContext();


const initialState = {
  list: [], 
  dentist: {},
  favs: JSON.parse(localStorage.getItem('favs')) ?? [],
  theme: localStorage.getItem("theme")}



const handleDispatch = (state, {type, payload}) => {
  switch (type) {
    case 'GET_DATA':
      return { ...state, list: payload};
    case 'GET_DENTIST':
      return {...state, dentist: payload};
    case 'ADD_FAVS':
      return {...state, favs: [...state.favs, payload]};
    case 'DELETE_FAV':
        return {...state, favs: payload}
    case "DARK":
        localStorage.setItem("theme", JSON.stringify("dark"))
        return {...state, theme: "dark"}
    case "LIGHT":
        localStorage.removeItem("theme")
        return {...state, theme: null
        }
      default: 
      return state; 
  }
}



export const GlobalContextProvider = ({ children }) => {
  
  const urlList = `https://jsonplaceholder.typicode.com/users`
  const [state, dispatch] = useReducer(handleDispatch, initialState);

  useEffect(() => {
    axios.get(urlList)
    .then(res => dispatch({type: 'GET_DATA', payload: res.data}))
  },[urlList]
  )

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs]
  )

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>

  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext)