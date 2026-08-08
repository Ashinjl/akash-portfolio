import "dotenv/config";
import { Client } from "@notionhq/client";

// Initialize Notion client with your internal integration token
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

async function getDataSourceId() {
  try {
    // Retrieve the database metadata
    const res = await notion.databases.retrieve({ database_id: databaseId }) as any;

    // NOTE: The Notion API (2025) includes `data_sources`, but TypeScript types lag behind.
    // So we safely access it using `as any` to avoid type errors.
    const dataSourceId = res.data_sources?.[0]?.id;

    if (!dataSourceId) {
      console.error("❌ No data_sources found. Make sure this is a valid database and your integration has access.");
      return;
    }

    console.log("✅ Your data_source_id:", dataSourceId);

    return dataSourceId;
  } catch (error: any) {
    console.error("❌ Failed to retrieve Notion database:");
    console.error(error.body ?? error);
  }
}

// Run directly if this file is executed standalone
if (require.main === module) {
  getDataSourceId();
}

export { notion, getDataSourceId };
