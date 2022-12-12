
import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png'
import ListaDeTareas from './componentes/ListaDeTareas.js';



function App() {
    return (
        <div className="App">
            <div className="freecodecamp-logo-contenedor">
                <img src={freecodecampLogo} className='freecodecamp-logo' alt='logo freecodecamp'/>
            </div>
            <div className='tareas-lista-principal'>
                <h1>Mis Tareas</h1>
                <ListaDeTareas/>
            </div>
        </div>
    );
}

export default App;
