import React from "react";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            player: 'x',
        }
    }

    isWinner = (lastTip) => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winnerLines.length; i++) {
            let line = winnerLines[i];
            if (this.state.squares[line[0]] === lastTip
                && this.state.squares[line[1]] === lastTip
                && this.state.squares[line[2]] === lastTip) {
                document.querySelector('.game_restart-area').classList.add('end_game');
                this.emphasizeAttention(line);
                return;
            }
        }
        if (this.state.squares.find(elem => elem === null) === undefined) {
            document.querySelector('.game_restart-area').classList.add('end_game');
            document.querySelector('.game_board').classList.add('square_won');
            return;
        }
        this.swapPlayer();
    }

    swapPlayer = () => {
        if (this.state.player === 'x') {
            this.state.player = 'o';
        } else {
            this.state.player = 'x';
        }
    }

    emphasizeAttention = (line) => {
        document.querySelector('.game_board').classList.add('square_won');
        let allSquares = document.querySelectorAll('.square');
        line.forEach(elem => allSquares[elem].classList.add('square_won'));
    }

    handlerClick = (event) => {
        let data = event.target.getAttribute('data');
        let currentSquare = this.state.squares;

        if (currentSquare[data] === null) {
            currentSquare[data] = this.state.player;
            event.target.firstChild.classList.add(this.state.player);
            this.isWinner(this.state.player);

        }
        this.setState({squares: currentSquare})

    }

    resetGame = () => {
        this.setState({squares: Array(9).fill(null)});
        document.querySelector('.game_board').classList.remove('square_won');
        document.querySelectorAll('.square').forEach(elem => elem.classList.remove('square_won'));
        document.querySelectorAll('.square_tip').forEach(elem => elem.classList.remove('x', 'o'));
        document.querySelector('.game_restart-area').classList.remove('end_game');
        this.swapPlayer();
    }
    render() {

        return (
            <div className={'game'}>
                <div className={'game_board'}>
                    <div className="square top left" onClick={this.handlerClick} data ={'0'}>
                        <div className={'square_tip'}> </div>
                    </div>
                    <div className="square top" onClick={this.handlerClick} data ={'1'}>
                        <div className={'square_tip '}> </div>
                    </div>
                    <div className="square top right" onClick={this.handlerClick} data ={'2'}>
                        <div className={'square_tip '}> </div>
                    </div>
                    <div className="square left" onClick={this.handlerClick} data ={'3'}>
                        <div className={'square_tip'}> </div>
                    </div>
                    <div className="square center" onClick={this.handlerClick} data ={'4'}>
                        <div className={'square_tip'}> </div>
                    </div>
                    <div className="square right" onClick={this.handlerClick} data ={'5'}>
                        <div className={'square_tip '}> </div>
                    </div>
                    <div className="square bottom left" onClick={this.handlerClick} data ={'6'}>
                        <div className={'square_tip'}> </div>
                    </div>
                    <div className="square bottom" onClick={this.handlerClick} data ={'7'}>
                        <div className={'square_tip '}> </div>
                    </div>
                    <div className="square bottom right" onClick={this.handlerClick} data ={'8'}>
                        <div className={'square_tip'}> </div>
                    </div>
                </div>
                <div className={'game_restart-area'} onClick={this.resetGame}> </div>
            </div>
        )
    }

}

export default Game;