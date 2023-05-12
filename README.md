# Docs

Please refer to [this](https://dev.to/arafat4693/how-i-built-my-fullstack-and-typesafe-portfolio-website-26ia) article to learn more about the website. Thank you😊

Make sure to copy the content from the **.env.example(tells you the structure of env file)** file to your **.env.local** file. Afterward you can delete **.env.example** file. It's no longer needed.

> Here I am using a graphQL CMS called Hygraph. So If you want run this project on your machine, make sure first that your hygraph is completely configured. Or Use this URL to clone the complete Hygraph project, including assets, contents, etc. https://app.hygraph.com/clone/61c44d5d9a2640f39c7a617d3bc6cf60?name=Portfolio. Afterward, go to (project settings -> Endpoints -> content API). Here you will find the HYGRAPH_URL. To find HYGRAPH_AUTH_TOKEN scroll down a bit. You will see (Permanent Auth Tokens) section. There you can create your auth token.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
