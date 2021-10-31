import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchUsers } from '../redux'
import { getUsers } from '../redux-toolkit/users/usersSlice'

function UserContainer() {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <h1>Redux Toolkit createAsyncThunk</h1>
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
export default UserContainer


// rfce