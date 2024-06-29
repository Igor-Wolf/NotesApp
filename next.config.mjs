/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    },
  };
  
export default nextConfig;
  

// essa parte é muito importante para o carregamento do styled component, principalmente no recarregamento da página e no primeiro carregamento do site