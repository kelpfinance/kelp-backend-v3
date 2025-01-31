/**
 * web3 controller
 */
import { factories } from '@strapi/strapi'
import Moralis from 'moralis';
export default factories.createCoreController('api::web3.web3', ({ strapi }) =>  ({
    async getWalletBalance(ctx) {
        const { address } = ctx.params;
        if (!address) {
            return ctx.badRequest('Address is required');
        }
       
        const balance = await Moralis.EvmApi.balance.getNativeBalance({
            address: address as string,
            chain: 1
        });
        return balance;
    }

}));
