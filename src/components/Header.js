import React from 'react';

export const Header = ({ onChange }) => {
    const handleInputChange = (event) => {
        // Llama a la función onChange pasando el nuevo valor del campo de entrada
        onChange(event.target.value);
    };

    return (
        <header className="header-footer">
            <h1 className="header-footer-text">UNIR-CINEMA</h1>
            {/* Agrega el controlador onChange al campo de entrada */}
            <input
                type="text"
                placeholder="Buscar películas..."
                className="search-input"
                onChange={handleInputChange}
            />
        </header>
    );
};
