const stateDefault = {
    optionArray: [
        {id: 'keo', image:'./image/keo.png', choose: true},
        {id: 'bua', image:'./image/bua.png', choose: false},
        {id: 'bao', image:'./image/bao.png', choose: false},
    ],
    result: "I'm iron man, I love you 3000", 
    win: 0, 
    totalRound: 0,
    computer: {id: 'keo', image:'./image/keo.png', choose: 'false'},
}

const gameReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHOOSE_OPTION':
            // console.log(action);
            let updateChoose = [...state.optionArray]
            updateChoose = updateChoose.map((item) => {
                if(item.id == action.id){
                    return {...item, choose: true}
                }
                return {...item, choose: false}
            })
            state.optionArray = updateChoose;
            return {...state}
            
        case 'RANDOM_CHOOSE':
            let randomeNumber = Math.floor(Math.random()*3)
            let randomOption = state.optionArray[randomeNumber]
            state.computer = randomOption;
            return {...state}
        
        case 'END_GAME':
            let player = state.optionArray.find(item => item.choose === true);
            let computer = state.computer

            if (player.id === "keo"){
                if (computer.id === "keo"){
                    state.result = "We are tie!"
                }
                if (computer.id === "bua"){
                    state.result = "Aww, You lose!"
                }
                if (computer.id === "bao"){
                    state.result = "I'm iron man, I love you 3000"
                    state.win++;
                }
            }
            if (player.id === "bua"){
                if (computer.id === "bua"){
                    state.result = "We are tie!"
                }
                if (computer.id === "bao"){
                    state.result = "Aww, You lose!"
                }
                if (computer.id === "keo"){
                    state.result = "I'm iron man, I love you 3000"
                    state.win++;
                }
            }
            if (player.id === "bao"){
                if (computer.id === "bao"){
                    state.result = "We are tie!"
                }
                if (computer.id === "keo"){
                    state.result = "Aww, You lose!"
                }
                if (computer.id === "bua"){
                    state.result = "I'm iron man, I love you 3000"
                    state.win++;
                }
            }
            state.totalRound++;
        default: return {...state}
    }
}

export default gameReducer;