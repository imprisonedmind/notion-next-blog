# Notion-Next.js Blog

This project is a dynamic blog built with Next.js, leveraging Notion as both the writing environment and database for blog posts. It aims to simplify content management and publication flow, allowing writers and developers to collaborate efficiently within a single, unified platform.

[![YouTube Video](https://img.youtube.com/vi/fFp-jGz9PYw/0.jpg)](https://www.youtube.com/watch?v=fFp-jGz9PYw)

## Features

- **Notion as CMS**: Use Notion for creating, organizing, and managing blog posts.
- **Dynamic Content Rendering**: Blog posts are rendered dynamically on the website using Next.js.
- **SEO Friendly**: Optimized for search engines, ensuring broad visibility of your content.
- **Responsive Design**: Built on top of [shadcn](https://github.com/shadcn-ui/ui), 
  Ensures a smooth reading experience on 
  any 
  device.



## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before cloning the repo, ensure you have the following tools installed:

- Node.js (version 20.x or later)
- bun (version 1.x or later)

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/imprisonedmind/notion-next-blog.git
```

2. **Navigate to the project directory**

```sh
cd notion-next-blog
```

3. **Install dependencies**

```sh
bun install
```

4. **Environment Configuration**

Create a `.env.local` file at the root of your project and add your Notion integration tokens and any other configuration parameters your project might need. For example:

```sh
AUTH_TOKEN=<your_notion_api_key>
DATABASE_ID=<your_notion_database_id>
```

5. **Run the development server**

```sh
bun dev
```

Open http://localhost:3000 with your browser to see the result.

## How to Write Blog Posts

1. **Setting up a Notion Database**: Create a Notion database for your blog posts. Each database entry will correspond to a blog post on your site.
   
2. **Writing Blog Posts**: Write your blog posts directly in Notion. Use the properties in the database to add metadata like the post's title, description, and publication date.

3. **Integrating with the Blog**: Use the Notion API to fetch the content from your database and display it on your Next.js site.

Refer to the `/lib/notion.js` module for examples on how to query the Notion API for your posts.

## Contributing

We welcome contributions to this project! Whether it's submitting bug reports, feature requests, or submitting pull requests, all forms of contributions are appreciated.

Please refer to CONTRIBUTING.md for more details on how to contribute.

## Deploying

For deploying your Next.js application, consider using Vercel, which provides seamless deployment for Next.js projects.

1. **Push your code** to your repository.
2. **Import your project** on [Vercel](https://vercel.com).
3. **Set up environment variables** on Vercel to match those in your `.env.local`.

For other platforms, refer to the respective documentation on deploying Next.js applications.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.
