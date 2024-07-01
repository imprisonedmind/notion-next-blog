"use server";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.AUTH_TOKEN,
});

export const fetchBlogs = async () => {
  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
  });

  const { results } = data;
  return results;
};

export const postContact = async ({ email }: { email: string }) => {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_DC = process.env.MAILCHIMP_DC; // Datacenter, e.g., 'us1'

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const res = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const x = await res.json();

    if (res.status !== 200) {
      return { status: 400, res: x };
    } else {
      return { status: 200, res: data };
    }
  } catch (error) {
    console.log(error.detail);
  }
};
