export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/web3/get-wallet-balance/:address',
        handler: 'web3.getWalletBalance',
      },
      
    ]
  }