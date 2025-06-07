
import React, { useState } from 'react'
import PowerBI from '../images/PowerBI.jpg'
import HTML from '../images/HTML.jpg'
import CSS from '../images/CSS.png'
import JS from '../images/JS.png'
import PY from '../images/PY.png'
import NODE from '../images/NODE.png'
import DJ from '../images/DJ.jpg'
import REACT from '../images/REACT.png';

// Estilos base para cada tarjeta individual
const skillCardBaseStyle = { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    width: '150px', // Ancho fijo para las tarjetas 
    textAlign: 'center',
    cursor: 'pointer', // Indica que es interactivo
    transition: 'all 0.3s ease', // Suaviza la transición de los estilos
};

// Estilos para el estado de "elevado" (hover)
const skillCardHoverStyle = { 
    transform: 'translateY(-5px)', // Mueve la tarjeta ligeramente hacia arriba
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Aumenta la sombra para el efecto de relieve
    borderColor: '#6a0dad', // Opcional: cambia el color del borde
};

// Estilos para el logo dentro de la tarjeta
const skillLogoStyle = {
    width: '90px', // Tamaño del logo
    height: '60px',
    marginBottom: '10px',
};

const skillTextStyle = {
    margin: '0',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#333',
};

const skillExperienceStyle = {
    margin: '5px 0 0 0',
    fontSize: '0.85em',
    color: '#666',
};

// --- COMPONENTE SkillCard MOVÍDO FUERA DE Skills ---
// componente funcional independiente
const SkillCard = ({ logoSrc, skillName, experience }) => {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover

    // Combina los estilos base y los estilos de hover
    const currentCardStyle = {
        ...skillCardBaseStyle, // Ahora skillCardBaseStyle es accesible
        ...(isHovered ? skillCardHoverStyle : {}), // Y skillCardHoverStyle también
    };

    return (
        <div
            style={currentCardStyle}
            onMouseEnter={() => setIsHovered(true)} // Cuando el mouse entra, setea isHovered a true
            onMouseLeave={() => setIsHovered(false)} // Cuando el mouse sale, setea isHovered a false
        >
            <img src={logoSrc} alt={`${skillName} Logo`} style={skillLogoStyle} />
            <p style={skillTextStyle}>{skillName}</p>
            <p style={skillExperienceStyle}>{experience}</p>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL Skills ---
export default function Skills() {
    // Estilos para el contenedor de todas las tarjetas
    const skillsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px', // Espacio entre las tarjetas
        justifyContent: 'center', // Centra las tarjetas horizontalmente
        padding: '20px',
        maxWidth: '2000px', // Opcional: Limita el ancho de la sección de habilidades
        margin: '20px auto', // Centra la sección y añade margen vertical
    };

    return (
        <section>
            <h1 style={{ textAlign: 'center', color: '#6a0dad', marginBottom: '30px' }}>Skills</h1> {/* Título principal */}
            <div style={skillsContainerStyle}>
                {/* Ahora usamos el componente SkillCard reutilizable */}
                <SkillCard logoSrc={PowerBI} skillName="Power BI" experience="3 años de experiencia" />
                <SkillCard logoSrc={HTML} skillName="HTML" experience="1 años de experiencia" />
                <SkillCard logoSrc={CSS} skillName="CSS" experience="1 años de experiencia" />
                <SkillCard logoSrc={JS} skillName="JavaScript" experience="1 años de experiencia" />
                <SkillCard logoSrc={PY} skillName="PYTHON" experience="1 años de experiencia" />
                <SkillCard logoSrc={NODE} skillName="NODE JS" experience="1 años de experiencia" />
                <SkillCard logoSrc={DJ} skillName="Django" experience="1 años de experiencia" />
                <SkillCard logoSrc={REACT} skillName="REACT" experience="1 años de experiencia" />
            </div>
        </section>
    );
}