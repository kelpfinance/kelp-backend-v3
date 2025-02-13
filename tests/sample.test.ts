import { cleanupStrapi, setupStrapi } from "./helpers/strapi";
require('./kelp-info')
beforeAll(async () => {
  await setupStrapi();
});

// afterAll(async () => {
//   await cleanupStrapi();
// });

// it("strapi is defined", () => {
//   expect(strapi).toBeDefined();
// });