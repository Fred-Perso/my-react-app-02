import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from './contentfulConfig';

const ContentDisplay = () => {
  const [content, setContent] = useState({
    fly: 'Valeur par défaut pour fly',
    rich: 'Valeur par défaut pour rich',
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
      <p>Fly: {typeof content.fly === 'object' ? JSON.stringify(content.fly) : content.fly}</p>
      <div>Rich: {content.rich}</div>
    </div>
  );
};

export default ContentDisplay;
