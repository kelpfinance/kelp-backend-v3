// import type { Core } from '@strapi/strapi';
import Moralis from 'moralis';
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register({strapi}) {
    await Moralis.start({
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjZkYmM3OThlLTM3ZDItNDQyZi1hZTkzLTc1ODYwMGMxYzM0ZCIsIm9yZ0lkIjoiMzU4NDI2IiwidXNlcklkIjoiNDI4MzI1IiwidHlwZUlkIjoiMTY2ZTE5MDQtYWUzMS00N2I1LWEyNzctNGY5OGFlYzNkNzI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzgyODc1OTksImV4cCI6NDg5NDA0NzU5OX0.Jl8JHLxIPIyIkyJfc0G0oEAQJuFaVmq2nK_A_zCoukQ"
    });
    strapi.moralis = Moralis;
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
