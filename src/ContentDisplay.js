// ContentDisplay.js
import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState({
    fly: 'Valeur par défaut pour fly',
    rich: 'Valeur par défaut pour rich',
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU'); // Utilisez l'ID correct de votre entrée

        // Ajoutez une condition pour éviter l'erreur
        if (response.fields && response.fields.fly && response.fields.rich) {
          // Utilisez un seul setContent avec un objet contenant tous les champs
          setContent({
            fly: response.fields.fly,
            rich: response.fields.rich,
          });
        }
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {/* Utilisez les valeurs de l'état dans votre composant */}
      <p>Fly: {content.fly}</p>
      <p>Rich: {content.rich}</p>
    </div>
  );
};

export default ContentDisplay;
