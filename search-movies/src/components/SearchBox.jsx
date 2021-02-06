import React, { useRef, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import Loading from './Loading';
import { getSearchResults } from '../actions/searchMoviesActions';
import SearchResults from './SearchResults';
import RecentSearches from './RecentSearches';

function SearchBox(props) {
    const searchInput = useRef();
    const [category, setCategory] = useState('comics');
    const { applicationState: { loading, searchResults, lastSearchItems } } = props;
    const dispatch = useDispatch();

    const search = () => {
        const searchVal = searchInput.current.value;
        const searchCategory = category ? category : 'comics';
        dispatch(getSearchResults(searchVal, searchCategory));
    }
    return (<>
        <Loading show={loading} />
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card p-4 mt-3">
                        <h3 className="heading mt-5 text-center">Hi! Search various Comics, Series, Character, events etc.</h3>
                        <div className="d-flex justify-content-center px-5">
                            <div className="search">
                                <input type="text" className="search-input" placeholder="Search..." ref={searchInput} />
                                <button className="search-icon" onClick={() => search()}> <i className="fa fa-search"></i> </button>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <button type="button" className={`btn btn-link ${(category === 'comics') ? 'selectedItem' : ''} `} onClick={() => setCategory('comics')} >Comics</button>
                            <button type="button" className={`btn btn-link ${(category === 'series') ? 'selectedItem' : ''} `} onClick={() => setCategory('series')} >Series</button>
                            <button type="button" className={`btn btn-link ${(category === 'characters') ? 'selectedItem' : ''} `} onClick={() => setCategory('characters')} >Character</button>
                            <button type="button" className={`btn btn-link ${(category === 'creators') ? 'selectedItem' : ''} `} onClick={() => setCategory('creators')} >Creators</button>
                            <button type="button" className={`btn btn-link ${(category === 'events') ? 'selectedItem' : ''} `} onClick={() => setCategory('events')} >Events</button>
                        </div>
                        {Array.isArray(lastSearchItems) && lastSearchItems.length > 0 && <RecentSearches />}
                        {
                            (Array.isArray(searchResults) && searchResults.length > 0) && <SearchResults details={searchResults} searchedTest={searchInput.current.value} />
                        }
                        {
                             (Array.isArray(searchResults) && searchResults.length === 0) && <h3>No Results Found.</h3>
                        }
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}

const mapStateToProps = (state) => {
    return {
        applicationState: state.searchApp
    }
};
export default connect(mapStateToProps)(SearchBox);