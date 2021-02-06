import React, { useState } from 'react';
import { connect } from 'react-redux';


function RecentSearches({ lastSearchItems }) {
    const [showRecentSearches, setShowRecentSearches] = useState(false)
    return (<>
        <div className=''>
            <button type="button" className={`btn btn-link`} onClick={() => setShowRecentSearches(!showRecentSearches)} >Toggle to See latest Searches</button><br />
            {
                showRecentSearches && <div className='row mt-4 ml-4 justify-content-left'>
                    {lastSearchItems.length > 0 ?
                        <div className='pt-1' style={{ lineHeight: '0.25' }}>
                            {
                                lastSearchItems.slice(0).reverse().map((item, i) => <p key={i}>{i + 1}) {item}</p>)
                            }
                        </div> :
                        <span></span>}
                </div>
            }

        </div>
    </>
    );
}

const mapStateToProps = (state) => {
    return {
        lastSearchItems: state.searchApp.lastSearchItems
    }
};
export default connect(mapStateToProps)(RecentSearches);