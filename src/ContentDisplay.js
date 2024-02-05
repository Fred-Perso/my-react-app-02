import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState({ fly: null, rich: null });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU');
        setContent({
          fly: response.fields['fly'], // Assurez-vous d'utiliser la locale correcte
         
        });
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <p>Fly: {content.fly}</p>
     
    </div>
  );
};

export default ContentDisplay;
