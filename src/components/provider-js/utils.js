export function getChainFromChainId(chainId) {
  switch (chainId) {
    // case 3:
    //   return 'Ropsten Testnet (Etherium)'
    // case 4:
    //   return 'Rinkeby Testnet (Etherium)'
    case 80001:
      return 'Mumbai Testnet (Polygon)'
    default:
      return 'UNSUPPORTED NETWORK'
  }
}

export function getSymbolFromChainId(chainId) {
  switch (chainId) {
    // case 3:
    //   return 'ETH'
    // case 4:
    //   return 'ETH'
    case 80001:
      return 'MATIC'
    default:
      return '$$$'
  }
}

export function supportedChain(chainId) {
  return true
  switch (chainId) {
    case 80001:
      return true
    default:
      return false
  }
}
