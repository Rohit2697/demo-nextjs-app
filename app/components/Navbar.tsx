import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'blue', padding: '1rem', color: 'white' }}>
      <div>SDLC Pipeline</div>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
        <Image src="/avatar-placeholder.png" alt="Profile Avatar" width={40} height={40} />
      </div>
    </nav>
  );
};

export default Navbar;
