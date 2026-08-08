import "dotenv/config";
import { Client } from "@notionhq/client";

console.log("🟦 Starting Notion data source fetch...");

// ✅ Log environment variable presence (never print full token)
if (!process.env.NOTION_TOKEN) {
  console.error("❌ Missing NOTION_TOKEN in .env");
  process.exit(1);
}
if (!process.env.NOTION_DATABASE_ID) {
  console.error("❌ Missing NOTION_DATABASE_ID in .env");
  process.exit(1);
}

console.log("🔑 NOTION_TOKEN (first 10 chars):", process.env.NOTION_TOKEN.slice(0, 10) + "...");
console.log("📘 NOTION_DATABASE_ID:", process.env.NOTION_DATABASE_ID);

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

async function getDataSourceId() {
  try {
    console.log("🚀 Fetching database metadata from Notion API...");

    // Fetch database details
    const res = (await notion.databases.retrieve({ database_id: databaseId })) as any;

    console.log("✅ Database retrieved successfully!");
    console.log("📄 Database title:", res?.title?.[0]?.plain_text || "(no title)");
    console.log("🧩 Database object keys:", Object.keys(res));

    // Safely check for `data_sources`
    const dataSourceId = res.data_sources?.[0]?.id;

    if (!dataSourceId) {
      console.warn("⚠️  No 'data_sources' field found in response.");
      console.warn("💡 This can happen if:");
      console.warn("   - You're using an old Notion API version");
      console.warn("   - Your integration doesn’t have access");
      console.warn("   - This is not a synced database");
      console.log("🧠 Full response for debugging:");
      console.dir(res, { depth: null });
      return;
    }

    console.log("✅ Your data_source_id:", dataSourceId);
    return dataSourceId;

  } catch (error: any) {
    console.error("❌ Failed to retrieve Notion database!");

    if (error.code) console.error("🧩 Error code:", error.code);
    if (error.status) console.error("📟 HTTP status:", error.status);
    if (error.message) console.error("💬 Message:", error.message);
    if (error.body) console.error("📦 Raw body:", error.body);

    console.error("\n💡 Troubleshooting tips:");
    console.error("  1️⃣ Verify your NOTION_TOKEN matches your integration’s secret.");
    console.error("  2️⃣ Ensure your integration is added under 'Connections' on the Notion database page.");
    console.error("  3️⃣ Make sure the database is in the same workspace as the integration.");
  }
}

if (require.main === module) {
  getDataSourceId();
}

export { notion, getDataSourceId };
