import React, { useState } from 'react';

function App() {
  const [screen, setScreen] = useState(1);  // Usamos useState para manejar el estado de screen

  function jugar() {
    setScreen(2);  // Cambia el estado de screen a 2 cuando se hace clic en "Jugar"
  }
  function salir(){
    setScreen(1);
  }

  if (screen === 1) {
    return (
      <div className="intro">
        <section className="reglas pasto-2">
          <h1>Reglas</h1>
          <ul>
            <li>Hay 151 pokémones, por lo que al descubrirlos todos se termina el juego.</li>
            <li>Se comienza con 7 vidas, con cada error se resta una de estas.</li>
            <li>Con cada acierto se suman 20 PTs, por cada letra repetida se suman 10 adicionales.</li>
            <li>Al adquirir puntos, estos se pueden gastar por pistas, vidas o saltar un nivel.</li>
          </ul>
        </section>
        <section className="reglas pasto">
          <table className='master'>
            <tr>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Puntaje</th>
            </tr>
            <tr>
              <td>1</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>2</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>3</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>4</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>5</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>6</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>7</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>8</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>9</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>10</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
          </table>
          <table className='poke'>
            <tr>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Puntaje</th>
            </tr>
            <tr>
              <td>11</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>12</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>13</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>14</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>15</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>16</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>17</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>18</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>19</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>20</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
            <tr>
              <td>21</td>
              <td>DG</td>
              <td>555</td>
            </tr>  
            <tr>
              <td>22</td>
              <td>DG</td>
              <td>555</td>
            </tr>  
            <tr>
              <td>23</td>
              <td>DG</td>
              <td>555</td>
            </tr>  
            <tr>
              <td>24</td>
              <td>DG</td>
              <td>555</td>
            </tr>  
            <tr>
              <td>25</td>
              <td>DG</td>
              <td>555</td>
            </tr> 
          </table>
        </section>
        <section className="comienzo">
          <div className="inicio">
            <button onClick={jugar}><p className="poke-solid">Jugar</p></button>
          </div>
        </section>
      </div>
    );
  }else if (screen === 2) {
    return (
      <div className="juego">
        <section className="game-part1">
          <h1 className="cual-poke poke-solid">¿Cuál es este pokémon?</h1>
        </section>
        <section className="game-part2">
          <button onClick={salir}><p className="poke-solid">Jugar</p></button>
        </section>
      </div>
    );
  }else{
    alert("Error inesperado");
  }
}

export default App;