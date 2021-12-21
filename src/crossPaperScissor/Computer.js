import React, { Component } from 'react'
import { connect } from "react-redux"

class Computer extends Component {
    render() {
        // ko được định nghĩa keyframe trùng tên để có thể chạy bình thường -> random tên
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -10px;}
            25% {top: 25px;}
            50% {top: -10px;}
            75% {top: 25px;}
            100% {top: 0;}
        }
        `
        const { computer } = this.props;
        return (
            <div className='text-center playerGame'>
                <style>
                    {keyframe}
                </style>
                <div className='think' style={{ position: "relative" }}>
                    <img
                        style={{ position: 'absolute', animation: `randomItem${Date.now()} 0.5s`, left: "5%", transform: 'rotate(180deg)'}}
                        width={75}
                        src={computer.image}
                        alt={computer.image} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./image/playerComputer.png' alt='playerComputer' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.gameReducer.computer,
    }
}
export default connect(mapStateToProps, null)(Computer)