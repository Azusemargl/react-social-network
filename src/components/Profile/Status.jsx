import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FiledCreator } from '../common/Forms/FormCreator';
import './profile.scss';

// Component
const StatusField = ({onStatus, status, handleSubmit}) => {
   const Input = FiledCreator("input");

   return (
      <form onSubmit={handleSubmit}>
         <Field
            component={Input}
            className="status__input"
            onBlur={onStatus}
            value={status}
            autoFocus={true}
            name="status"
            type="text"
         />
      </form>
   )
};

const StatusReduxField = reduxForm({form: "statusForm"})(StatusField);

const Status = () => {

   // Hooks
   const [status, setStatus] = React.useState();
   const [activeStatus, setActiveStatus] = React.useState(false);

   // Callbacks
   const onStatus = () => {
      setActiveStatus(!activeStatus);
   };

   const onSetStatus = (e) => {
      setStatus(e.target.value);
   };

   return (
      <div className="status">
         {!activeStatus
            ? <span className="status__label" onClick={onStatus}>
               {status ? status : 'Введите статус'}
              </span>
            : <StatusReduxField
               className="status__input"
               onSubmit={onSetStatus}
               onStatus={onStatus}
               value={status}
               autoFocus={true}
               name="status"
               type="text"
            />
         }
      </div>
   );
};

export default Status;
