import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: 'blue', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>SDLC Pipeline</div>
      <div>
        <Image
          src="/avatar-placeholder.svg"
          alt="Profile Avatar"
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
