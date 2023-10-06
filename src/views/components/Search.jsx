import React from 'react'

const Search = ({ setPerPage, setSearchValue, searchValue }) => {

    return (
        <div className='flex justify-between items-center'>
            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent'>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" name='search' placeholder='search' />
        </div>
    )
}

export default Search