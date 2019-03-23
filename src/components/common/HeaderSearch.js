import React from 'react';

export default function() {
  return (
    <div className="general-search-wrapper">
      <form className="general-search" role="search" method="get" action="#">
        <input type="text" placeholder="Type and hit enter..." />
        <span id="general-search-close" className="ti-close toggle-search" />
      </form>
    </div>
  );
}
