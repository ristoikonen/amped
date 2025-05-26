// Sample data for our cards
const products = [
  {
    id: '1',
    name: 'Amplify UI Kit',
    description: 'A comprehensive set of UI components for React applications.',
    price: '$29.99',
    imageUrl: 'https://docs.amplify.aws/assets/logo.svg', // Placeholder image
  },
  {
    id: '2',
    name: 'Amplify DataStore',
    description: 'Simplified application data development using a local-first programming model.',
    price: '$19.99',
    imageUrl:
      'https://docs.amplify.aws/assets/feature_icons/datastore-feature.svg', // Placeholder image
  },
  {
    id: '3',
    name: 'Amplify Authenticator',
    description: 'Pre-built UI components for authentication flows.',
    price: '$9.99',
    imageUrl:
      'https://docs.amplify.aws/assets/feature_icons/authentication-feature.svg', // Placeholder image
  },
  {
    id: '4',
    name: 'Amplify Hosting',
    description: 'Continuous deployment and hosting for web applications.',
    price: '$0.00',
    imageUrl:
      'https://docs.amplify.aws/assets/feature_icons/hosting-feature.svg', // Placeholder image
  },
];

// Exporting an array of product objects
export const productss = [
  { id: 'p1', name: 'Wireless Headphones', price: 99.99, category: 'Electronics' },
  { id: 'p2', name: 'Ergonomic Keyboard', price: 75.00, category: 'Electronics' },
  { id: 'p3', name: 'Stainless Steel Water Bottle', price: 25.50, category: 'Home Goods' },
  { id: 'p4', name: 'Yoga Mat', price: 30.00, category: 'Fitness' },
];

export default products;