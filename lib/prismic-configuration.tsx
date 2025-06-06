// lib/prismic-configuration.js
import * as prismic from '@prismicio/client';

export const repositoryName = 'https://aippoint.cdn.prismic.io/api/v2'; // Replace with your repository name

export const client = prismic.createClient(repositoryName, {
  accessToken: 'your-access-token' // Optional: if you have a private repository
});