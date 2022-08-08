import { ACTIONS } from '../App'


const DigitButton = ({digit, dispatch}) => {

  const handleAdd = () => {
    return dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})
  }
  
  return (
    
      <button
      onClick={handleAdd}
      >{digit}</button>
   
  )
}

export default DigitButton