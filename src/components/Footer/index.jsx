import React, { useState, useEffect } from 'react';
import { TextContent, Wrapper, TextLink, TextContentExternal } from './styles';
import { Divisor } from '../Divisor';
import Link from 'next/link';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Divisor />
      <TextContentExternal>
        <TextContent>
          <p>© 2024. Todos os Direitos Reservados à Igor Barbosa. Desenvolvido por <a href="https://github.com/Igor-Wolf" style={{ fontWeight: 600, color: isMobile ? 'black' : 'white' }}> IB</a>
          </p>
        </TextContent>
      </TextContentExternal>
    </Wrapper>
  );
};

export { Footer };
