import React from 'react';

const Navbar = () => {
  const onSubmit = (e) => {};

  return (
    <form onSubmit={onSubmit}>
      <input type='text' id='search' placeholder='Search..' class='search' />
    </form>
  );
};

export default Navbar;
