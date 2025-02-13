const request = require('supertest');

describe("GET /api/kelp-info", () => {
    it("should return 403 when no API key is provided", async () => {
      await request(strapi.server.httpServer)
        .get("/api/kelp-info")
        .expect(403) // Expect HTTP 403 Forbidden
        .then((response) => {
          expect(response.status).toBe(403);
          expect(response.body).toHaveProperty("error"); // Optional: Ensure error message exists
        });
    });
  
    it("should return 200 with valid API key", async () => {
    let apiKey = "fe2ee989777fee4b33dab6f402a722162b882152d3a0e951ade03de54b75a3a895f236a022e1d3525ed044047ecf8709781e31c6e80a76bc030559ac3901e5506f47f689e21cd864dcc5da55d523d3da1f4e9481af024ed5bd2f10feb50cf9e304c5e67e873ca90ddeceb6d50f7d5d40996f4a6880867b3ef0ad3bd8f70e018b"; // Define a test API key

        await request(strapi.server.httpServer)
          .get("/api/kelp-info")
          .set("Authorization", `Bearer ${apiKey}`) // Check correct header format
        //   .expect(200)
          .then((response) => {
            console.log("🔍 Response Body:", response.body);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("data");
          });
      });
      
  });