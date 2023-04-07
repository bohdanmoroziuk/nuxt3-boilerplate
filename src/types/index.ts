export {}

declare global {
  interface User {
    id: string;
    name: string;
    email: string;
  }

  interface Post {
    id: string;
    title: string;
    body: string;
  }
}
