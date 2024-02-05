// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log('Fetching Contentful content...');
        
        const response = await client.getEntry('helloWorld'); // Assurez-vous de l'ID correct de votre entrée
        console.log('Contentful response:', response);

        setContent(response.fields.fly['en-US']); // Assurez-vous que 'en-US' est correct pour votre locale
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
