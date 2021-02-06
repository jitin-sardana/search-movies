import React from 'react';

function SearchResults({ details, searchedTest }) {
    return (<>
        <div className='row mt-4 justify-content-left'>
            <h2>Search Results ({details.length})  {searchedTest && <span> for {searchedTest}</span> }</h2>
           
            {details.map((result) => (
                <div className="row search-item bg-white mt-4 pt-3 pb-3 ml-1 mr-1">
                    {(result.thumbnail && result.thumbnail.path) && <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                        <img src={`${result.thumbnail.path}.jpg`} width='250' height='150' />
                    </div>}
                    <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                        <h4 className="mb-1"><a href={result.urls[0].url} target='_blank'>{result.title || result.name || result.firstName}</a></h4>
                        <div className="font-13 text-success mb-3">{result.urls[0].url}</div>
                        {(Array.isArray(result.textObjects) && result.textObjects.length) > 0 && <p className="mb-0 text-muted">{result.textObjects[0].text}</p>}
                        {result.description && <p className="mb-0 text-muted">{result.description}</p>}
                    </div>

                </div>
            ))}
        </div>

    </>
    );
}

export default SearchResults;