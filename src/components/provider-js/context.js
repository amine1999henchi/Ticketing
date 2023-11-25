import { useContext, createContext } from 'react'
import { ethers, Signer } from 'ethers'

const Web3Context = createContext({
  signer: null,
  account: null,
  web3: null,
  loading: false,
  error: null,
  balance: null,
  blockNumber: null,
  network: '',
  symbol: '',
})

export const useWeb3Context = () => useContext(Web3Context)

export default Web3Context
