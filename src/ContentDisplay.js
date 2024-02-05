// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU'); // Utilisez l'ID correct de votre entrée
        setContent(response.fields['fly'); 
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU'); // Utilisez l'ID correct de votre entrée
        setContent(response.fields['rich'); 
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
