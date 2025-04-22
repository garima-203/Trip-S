/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      nextScriptWorkers: false,  
    },
    devIndicators: false, 
      images: {
        unoptimized: true,
          remotePatterns: [
              {
                protocol: 'https',
                hostname: '**',  
              },
            ],
      },
      
    };
    
    export default nextConfig;
    