import React from 'react';
import { useStoreActions, useStoreState } from '../stores/userStore';

const SearchBar: React.FC = () => {
  const searchString = useStoreState(s => s.searchString)
  const setSearchString = useStoreActions(a => a.setSearchString)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <input
          type="search"
          className="w-full p-4 text-sm"
          placeholder="Search users"
          value={searchString}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default SearchBar