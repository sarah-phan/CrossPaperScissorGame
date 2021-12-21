import React, { Component } from 'react'
import "./main.css"
import Player from './Player'
import Computer from './Computer'
import Result from './Result'
import {connect} from 'react-redux'

class Game extends Component {
    render() {
        return (
            <div className='game'>
                <div className='row text-center mt-4'>
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <Result/>
                        <button 
                        className='btn btn-success p-2 mt-2 display-5' 
                        onClick={() => {
                            this.props.playGameButton()
                        }}>
                            Play game
                        </button>
                    </div>
                    <div className='col-4'>
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        playGameButton: () => {
            //show random
            let count = 0
            let randomLimit = setInterval(() => {
                dispatch({
                    type: 'RANDOM_CHOOSE',
                })
                count++
                if (count >= 10){
                    clearInterval(randomLimit)
                }
            }, 100)
        },
    };  
}

export default connect(null, mapDispatchToProps)(Game)