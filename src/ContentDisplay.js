// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('helloWorld'); // Utilisez le bon ID d'entrée si nécessaire
        // Vérifiez si le champ "titre" existe dans la réponse avant d'accéder à ses données
        if (response.fields && response.fields.titre) {
          setContent(response.fields.titre);
        } else {
          setError('Error: "titre" not found in Contentful response.');
        }
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
        setError('Error fetching Contentful content. See console for details.');
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {content && <p>{content}</p>} {/* Condition pour afficher le contenu uniquement s'il existe */}
      {error && <p>{error}</p>} {/* Afficher l'erreur si elle existe */}
    </div>
  );
};

export default ContentDisplay;
