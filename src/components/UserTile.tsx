import React from 'react';
import { useStoreActions } from '../stores/userStore';
import { ExtendedUser } from '../types';

const UserTile: React.FC<{ user: ExtendedUser; }> = ({ user }) => {
  const toggleChecked = useStoreActions((actions) => actions.toggleChecked)

  return (
    <li className="py-3 border-b-2" onClick={() => {
      toggleChecked(user)
    }}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={user.avatar || ''} alt="profile" />
        </div>
        <div className="w-3/4">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.first_name}&nbsp;{user.last_name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {user.email}
          </p>
        </div>
        <input
          className="h-4 w-4 mr-2"
          type="checkbox"
          checked={user.checked}
          onChange={e => { }}
        />
      </div>
    </li>
  )
}

export default UserTile
