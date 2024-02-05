import React, { useState, useEffect } from 'react';
import client from './contentfulConfig';
import ReactHtmlParser from 'react-html-parser';

const ContentDisplay = () => {
  const [content, setContent] = useState({ fly: null, rich: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await client.getEntry('3jhKR5PJNniuvqy8882hYU');
        setContent({
          fly: response.fields.fly,
          rich: response.fields.rich,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Contentful content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Fly: {content.fly}</p>
          <p>Rich Text: {content.rich && ReactHtmlParser(content.rich)}</p>
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
