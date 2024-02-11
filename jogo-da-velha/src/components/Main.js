import React, {Component} from 'react';
import './Main.css';
import Board from './Board';

export default class Main extends Component {
    state = {
        vez: 'X',
        plays: [],
        winner: null
    };

    handleVez = () => {
        let { vez } = this.state;
        if(vez === 'X') {
            this.setState({
                vez: 'O'
            });
        } else {
            this.setState({
                vez: 'X'
            });
        }
        return vez;
    };

    handleWinner = () => {
        const { plays } = this.state;
        this.setState({
            plays: document.querySelectorAll('.plays')
        });

        const winningCombos = [
            // horizontais
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            // Diagonais
            [0, 4, 8], [2, 4, 6],
            // Verticais
            [0, 3, 6], [1, 4, 7], [2, 5, 8]
        ];

        const campos = Array.from(plays).map(play => play.innerHTML);

        for(let combo of winningCombos) {
            const [a,b,c] = combo;
            if(campos[a] && campos[a] === campos[b] && campos[a] === campos[c]) {
                console.log(campos[a]);
                return campos[a];
            }
        }

        // Retorne V ou F para o value de todos os campos serem diferentes de ''.
        if(campos.every(value => value !== '') && campos.length > 0 ) return 'Empate';        
    };

    handlePlays = (e) => {
        const { winner } = this.state
        const el = e.target;
        if(el.classList.contains('plays') && el.innerHTML === '' && !winner ) {
           el.innerHTML = this.handleVez();
        }
        
        const win = this.handleWinner();
        if(win) {
            if(win === 'X') {
                this.setState({
                    winner: 'Player 1 venceu!'
                });
            } else if(win === 'O') {
                this.setState({
                    winner: 'Player 2 venceu!'
                });
            } else {
                this.setState({
                    winner: 'Velha'
                });
            }            
        }       
    };

    handleRematch = () => {
       this.setState({
        vez: 'X',
        plays: [],
        winner: null
       });
       const campos = document.querySelectorAll('.plays');
       const zeraCampo = Array.from(campos);
       for(let campo of zeraCampo) {
        campo.innerHTML = '';
       } 
    };

    render() {
        const { winner } = this.state;
        return (
            <main>
                <Board
                    handlePlays={this.handlePlays}
                />
                {winner && 
                <div>
                    <h1 className='winner-text'>{winner}</h1> 
                    <button className='again' onClick={this.handleRematch}>Recomeçar</button>
                </div>
                }
            </main>            
        );
    };
};