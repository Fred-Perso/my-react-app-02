// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('helloWorld'); // Utilisez l'ID correct de votre entrée
        setContent(response.fields.Fly['en-US']); // Assurez-vous que 'en-US' est correct pour votre locale
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default ContentDisplay;
