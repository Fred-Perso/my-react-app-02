import { createClient } from 'contentful';
const contentfulConfig = {
  space: '8pvw0ip6a9ui',
  accessToken: '4dR9Ohm74VaxgQyCEc0JcBJij-0XjXcgAjBt-VzQuxU',
};
const client = createClient(contentfulConfig);
export default client;
