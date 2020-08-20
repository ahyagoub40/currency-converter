import initialState from "./initialState";

const reducer = (state = initialState, action) => {

  const getInput = () => ({
    ...state,
    canadian: action.amount
  })
  const convertAmount = () => ({
    ...state,
    american: state.canadian * state.ratio
  })
  const options = {
    GET_INPUT: getInput,
    CONVERT_AMOUNT: convertAmount,
    default: () => state
  }

  return (options[action.type] || options.default)()
}

export default reducer