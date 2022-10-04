import React, { useEffect, useMemo } from 'react';
import { useGetUsers } from '../hooks/useGetUsers';
import { useStoreState } from '../stores/userStore';
import UserTile from './UserTile';

const UsersList: React.FC = () => {
  const { data, isLoading, isError } = useGetUsers()
  const users = useStoreState(store => store.users)
  const searchString = useStoreState(store => store.searchString)

  useEffect(() => {
    console.log('checked users are', users.filter(u => u.checked).map(u => u.id))
  }, [users])

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        u.last_name.toLowerCase().includes(searchString.toLowerCase())
    );
  }, [users, searchString])

  const usersList = useMemo(() => {
    if (searchString.length > 0) {
      return filteredUsers
    }
    return filteredUsers.length === 0 ? users : filteredUsers
  }, [users, filteredUsers])

  if (isLoading) {
    return (
      <div className='font-bold'>Please wait...</div>
    )
  } else if (isError && !data) {
    return (
      <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">
        Users' data cannot be loaded!
      </div>
    )
  }
  return (
    <ul className='list-none'>
      {usersList.map(u => <UserTile key={u.id} user={u} />)}
    </ul>
  )
}

export default UsersList
