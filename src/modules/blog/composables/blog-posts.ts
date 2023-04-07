import { useFetch } from '#imports'

export const useBlogPosts = async () => {
  const { pending, data } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')

  const posts = computed(() => data.value || [])

  return {
    pending,
    posts
  }
}
