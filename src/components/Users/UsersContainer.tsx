import React from 'react'
import { connect } from 'react-redux'
import { usersRequest, followAction, unfollowAction } from '../../redux/reducers/usersReducer'
import { AppState } from '../../redux/store'
import { User } from '../../types/types'

// Component imports
import Spiner from '../common/Loading/Spiner'
import Users from './Users'

// Container component
const UsersContainer: React.FC<Props> = (props) => {
   const [isFetching, setFetching] = React.useState(false)

   // Set users after init
   React.useEffect(() => {
      return props.usersRequest(1, 50);
   }, [])

   // Loading before users init
   if (!props.init) {
      return (
         <div className="content">
            <Spiner />
         </div>
      );
   };

   return (
      <div className="content">
         <Users
            users={props.users}
            followAction={props.followAction}
            unfollowAction={props.unfollowAction}
            disabled={props.disabled}
         />
      </div>
   );
};

// State
const mapStateToProps = (state: AppState) => ({
   init: state.usersPage.init,
   users: state.usersPage.users,
   disabled: state.usersPage.disabled
});

// Export Component
export default connect(mapStateToProps, { usersRequest, followAction, unfollowAction })(UsersContainer);

// Types
type MapStateToProps = {
   init: boolean
   users: Array<User>
   disabled: Array<number>
}
type MapDispatchToProps = {
   usersRequest:   (currentPage: number, totalPage: number) => void
   followAction:   (id: number) => void
   unfollowAction: (id: number) => void
}
type Props = MapStateToProps & MapDispatchToProps
