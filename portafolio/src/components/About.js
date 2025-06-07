import React from 'react';
import miImagen from '../images/miImagen.png'; 

export default function About() {
    return (

        <div 
        style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', p: '20px',

            maxWidth: '70%', 
            margin: '0 auto', 
        }}>
            <div>
                <img 
                    src={miImagen}  
                    style={{ maxWidth: '400px', height: '400px' }} 
                />
            </div>
            <div style={{padding:50}}>
                <h2>Hola, soy Andres F. Lozano 👋🏼</h2> 
                <p>
                    ¡Hola! Soy Administrador tecnologico con enfasis en Analitica de datos y Desarrollador Full Stack con mas de 3 años de experiencia en inteligencia de negocios y creación de aplicaciones web. 
                    Me encanta aprender nuevas tecnologías y enfrentar desafíos para construir soluciones innovadoras. En mi tiempo libre, disfruto explorando nuevos lenguajes 
                    de programación y contribuyendo a proyectos de código abierto.
                </p>
                <p>
                    Mi objetivo es combinar ambos conocimientos en la inteligencia de negocios y crear experiencias de usuario intuitivas y eficientes, combinando creatividad 
                    con habilidades técnicas para dar vida a las ideas.
                </p>
            </div>
        </div>
    );
}
