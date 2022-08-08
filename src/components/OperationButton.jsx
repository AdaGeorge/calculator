import { ACTIONS } from '../App'


const OperationButton = ({operation, dispatch}) => {

  const handleOperation = () => {
    return dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})
  }
  
  return (
    
      <button
      onClick={handleOperation}
      >{operation}</button>
   
  )
}

export default OperationButton