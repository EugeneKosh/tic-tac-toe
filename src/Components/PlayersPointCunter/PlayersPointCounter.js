import React from "react";

class PlayersPointCounter extends React.Component{



    render() {
        return (
            <div className={'counter'}>
                <div className={'counter_block'}>
                    <span className={'counter_name'}>Player(X): </span>
                    <span className={'counter_score'}>{this.props.playerX}</span>
                </div>
                <div className={'counter_block'}>
                    <span className={'counter_name'}>Player(O): </span>
                    <span className={'counter_score'}>{this.props.playerO}</span>
                </div>
                <div className={'counter_block'}>
                    <span className={'counter_name'}>Tie: </span>
                    <span className={'counter_score'}>{this.props.tie}</span>
                </div>
            </div>
        )
    }
}

export default PlayersPointCounter;