export const apiVersion = '2024-01-02'

// Add default fallbacks and proper error messages
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
if (!dataset) {
  throw new Error('Please set NEXT_PUBLIC_SANITY_DATASET in your environment variables')
}

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
if (!projectId) {
  throw new Error('Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables')
}

export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN
if (!token) {
  throw new Error('Please set NEXT_PUBLIC_SANITY_TOKEN in your environment variables')
}

export const useCdn = process.env.NODE_ENV === 'production'