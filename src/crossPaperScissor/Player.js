import React, { Component } from 'react';
import { connect } from "react-redux";

class Player extends Component {
    render() {
        // console.log(this.props.optionArray)
        const {optionArray} = this.props;
        return (
            <div className='text-center playerGame'>
                <div className='think'>
                    <img style={{width: 70}} src={optionArray.find(item => item.choose === true).image} alt={optionArray.find(item => item.choose === true).image} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./image/player.png' alt='./image/player.png' />
                <div className='row'>
                    {optionArray.map((item, index) => {
                        let border = {};
                        // console.log(item.choose);
                        if(item.choose){
                            border = {border: '3px solid orange'};
                        }

                        return(
                            <div className='col-4'>
                            <button 
                            onClick={() => {
                                this.props.chooseOption(item.id);
                            }} 
                            style={border} 
                            className='btnItem'>
                                <img src={item.image} alt={item.image} />
                            </button>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        optionArray: state.gameReducer.optionArray
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        chooseOption: (id) => {
            dispatch({
                type: 'CHOOSE_OPTION',
                id,
            })
        },
    };  
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);