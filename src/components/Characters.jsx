import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import '../assets/style/Characters.css'
import Search from './Search';
import useCharacter from '../hooks/useCharacters';

const initialState = {
    favorites: [],
    
}


const API = 'https://rickandmortyapi.com/api/character/'
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            
     
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }


    

}


const Characters = (props) => {

   
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('');
    const searchInput =  useRef(null);


    const [darkMode, setDarkMode] = useState(false);

    const characters = useCharacter(API)


    const handleClik = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }



    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )


    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    

    const sumaTotal = ()=>{
        let total = 0
        favorites.favorites.forEach(element => { 
          total += element.id
        });

        return total
    }

    
    let total = sumaTotal()

   
    return (
        
        
        <div className="Character">

      

               <Search darkMode={darkMode} search={search} searchInput={searchInput} handleSearch={handleSearch} />
          

            <h2 className={props.darkMode ? "light-letter" : "dark-letter"}>Characters Rick and Morty:</h2>
            <div className="Character__container">

                {
                    filteredUsers.map(character => (

                        <div className={props.darkMode ? "Character_card" : "Character_card darkMode"} key={character.id}>

                            <div className="over-flow">
                                <img src={character.image} className="Character_img over-flow"></img>
                            </div>

                            <div className="Character_info">
                                <p><strong>Name: </strong>{character.name}</p>

                                <p><strong>Status: </strong>{character.status}</p>
                                <button type="button" onClick={() => handleClik(character)}>Agregar a Favoritos 💗</button>
                            </div>


                        </div>

                    ))
                }


            </div>

            <h2 className={props.darkMode ? "light-letter" : "dark-letter"}>
                Favorites:
            </h2>
            <div className="Character-favorites__container">

                {

                    favorites.favorites.map(favorites => (

                        <div className={props.darkMode ? "Character_card__favorites" : "Character_card__favorites darkMode"} key={favorites.id}>
                            <div className="over-flow">
                                <img src={favorites.image} className="Character_img over-flow"></img>
                            </div>
                            <div className="Character_info">
                                <p><strong>Name: </strong>{favorites.name}</p>

                                <p><strong>Status: </strong>{favorites.status}</p>
                                <p><strong>ID: </strong>{favorites.id}</p>

                            </div>
                        </div>

                    ))
                }

               
            

               
            </div>
            <h2>
                    Total : {total}
                </h2>
        </div>
    )
}

export default Characters
