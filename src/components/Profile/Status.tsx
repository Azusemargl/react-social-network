import React, { ChangeEvent } from 'react'
import { updateStatus } from '../../redux/reducers/profileReducer'
import './profile.scss'

// Component
const Status: React.FC<Props> = () => {
   const [status, setStatus] = React.useState('')
   const [activeStatus, setActiveStatus] = React.useState(false)

   const onStatus = () => {
      setActiveStatus(!activeStatus)
   }

   const onSetStatus = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.target.value)
      updateStatus(status)
   }

   return (
      <div className="status">
         {!activeStatus ? (
            <span className="status__label" onClick={onStatus}>
               {status ? status : 'Введите статус'}
              </span>
            ) : (
            <input
               className="status__input"
               onBlur={onSetStatus}
               value={status}
               autoFocus={true}
               name="status"
               type="text"
            />
         )}
      </div>
   )
}

export default Status

// Types
type Props = {

}
