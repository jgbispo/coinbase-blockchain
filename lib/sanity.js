import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.sanityID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.tokenAPI,
  useCdn: false
})