// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('helloWorld');
        // Vérifiez si 'helloWorld' existe dans la réponse avant d'accéder à ses champs
        if (response.fields && response.fields.helloWorld) {
          setContent(response.fields.helloWorld);
        } else {
          console.error('Error: "helloWorld" not found in Contentful response.');
        }
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {content && <p>{content}</p>} {/* Condition pour afficher le contenu uniquement s'il existe */}
    </div>
  );
};

export default ContentDisplay;

