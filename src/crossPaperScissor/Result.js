import React, { Component } from 'react'
import {connect} from "react-redux"

class Result extends Component {
    render() {
        const {result, win, totalRound} = this.props;
        return (
            <div>
                <div style={{fontSize: 26}} className='text-warning'>{result}</div>
                <div style={{fontSize: 30}} className='text-success'>Win: <span className='text-warning'>{win}</span></div>
                <div style={{fontSize: 30}} className='text-success'>Total Round: <span className='text-warning'>{totalRound}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.gameReducer.result,
        win: state.gameReducer.win,
        totalRound: state.gameReducer.totalRound,
    }
}

export default connect(mapStateToProps, null) (Result)
