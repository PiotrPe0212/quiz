export const typeRed = (state = "ALL", action) => {
    console.log(state)
    console.log(action)
      switch (action.type) { 
          case 'OK':
          return action.inputType
        default:
          return state
      }
    }