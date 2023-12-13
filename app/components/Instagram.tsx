import React from 'react';

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  // Extraer el código del enlace de Instagram
  const regex = /instagram\.com\/p\/([^/]+)/;
  const match = url.match(regex);
  const postCode = match ? match[1] : null;

  if (!postCode) {
    return null; // Manejar el caso en que la URL no sea válida
  }

  const embedUrl = `https://www.instagram.com/p/${postCode}/embed`;

  return (
    <div className="instagram-embed-container flex items-center justify-center">
      <iframe
        title={`Instagram Embed ${postCode}`}
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        className="instagram-embed-frame h-[230px]"
      ></iframe>
    </div>
  );
};

export default InstagramEmbed;
