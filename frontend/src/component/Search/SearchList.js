import React from 'react'
import {SearchResultList} from './Result/index'
import {Category} from './Category/index'
import {Popular} from './Popular/index'
import {Filter} from './Filter/index'




const SearchList= () => {
    
    
    return (
        <section className="max-h-full w-full flex">            
            <Category/>
            <SearchResultList/>
            <div className="w-50vh float-none right-0">
                <Popular/>
                <Filter/>
            </div>
        </section>
    )
}

export default SearchList;