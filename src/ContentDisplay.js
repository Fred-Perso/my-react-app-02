import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState({
    fly: 'Valeur par défaut pour fly',
    rich: 'Valeur par défaut pour rich',
    photo: null, // Ajout du champ photo initialisé à null
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU');

        if (response.fields) {
          const newContent = {};

          if (response.fields.fly) {
            newContent.fly = response.fields.fly;
          }

          if (response.fields.rich) {
            newContent.rich = documentToReactComponents(response.fields.rich);
          }

          if (response.fields.photo && response.fields.photo.fields) {
            // Assurez-vous que "photo" est un champ d'Asset avec un sous-champ "fields"
            newContent.photo = (
              <img
                src={response.fields.photo.fields.file.url}
                alt={response.fields.photo.fields.description || 'Description de la photo'}
              />
            );
          }

          setContent(newContent);
        } else {
          console.error('No fields found in Contentful response:', response);
        }
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1> {typeof content.fly === 'object' ? JSON.stringify(content.fly) : content.fly}</h1>
      <div> {content.rich}</div>
      <div>{content.photo}</div>
    </div>
  );
};

export default ContentDisplay;
