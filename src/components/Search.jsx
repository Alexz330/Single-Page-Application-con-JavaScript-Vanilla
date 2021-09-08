import React from 'react'
import '../assets/style/Characters.css'

function Search(props) {
    return (
        <div>
            <section class="Input-Seach">

                <input
                    type="text"
                    className={props.darkMode ? "input-light" : "input-dark "}
                    placeholder="Buscar..." value={props.search} ref={props.searchInput}
                    onChange={props.handleSearch}
                />
            </section>
        </div>
    )
}

export default Search

