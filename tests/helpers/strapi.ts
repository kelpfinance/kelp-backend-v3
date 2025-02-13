import { createStrapi } from "@strapi/strapi";
import * as fs from "fs";

let instance: any;
let apiKey = "fe2ee989777fee4b33dab6f402a722162b882152d3a0e951ade03de54b75a3a895f236a022e1d3525ed044047ecf8709781e31c6e80a76bc030559ac3901e5506f47f689e21cd864dcc5da55d523d3da1f4e9481af024ed5bd2f10feb50cf9e304c5e67e873ca90ddeceb6d50f7d5d40996f4a6880867b3ef0ad3bd8f70e018b"; // Define a test API key
async function setupStrapi() {
  if (!instance) {
    instance = await createStrapi({distDir: './dist'});
    await instance.start(); // Correct way to start Strapi in v5
    await createTestApiKey(instance);
  }
  return instance;
}

async function cleanupStrapi() {
  if (!instance) return;

  const dbSettings = instance.config.get("database.connection") as any;
  // Shutdown Strapi
  await instance.destroy();

  // Delete the test database file
  if (dbSettings?.connection?.filename) {
    const tmpDbFile = dbSettings.connection.filename;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }

  instance = null; // Reset instance
}
async function createTestApiKey(strapiInstance) {
  const existingKey = await strapiInstance.query("admin::api-token").findOne({
    where: { name: "Test API Key" },
  });

  if (!existingKey) {
    await strapiInstance.query("admin::api-token").create({
      data: {
        name: "Test API Key",
        type: "full-access",
        accessKey: apiKey, // Store key in variable for reuse
      },
    });
    console.log("✅ Test API key created:", apiKey);
  } else {
    console.log("✅ Test API key already exists:", existingKey.accessKey);
  }
}
export { setupStrapi, cleanupStrapi };
