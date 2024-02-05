import React, { useEffect, useState } from 'react';
import client from './contentfulConfig';
import './App.css';

function App() {


  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries();
        setData(response.items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Contentful React App</h1>
      {data && (
        <ul>
          {data.map((entry) => (
            <li key={entry.sys.id}>{entry.fields.helloWorld}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
