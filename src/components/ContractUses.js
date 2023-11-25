import { ethers, ContractTransaction } from 'ethers'
import { useWeb3Context } from './provider-js/context'
import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'

export function useTx (func) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hash, setHash] = useState(null)

  const call = useCallback(
    async (...args) => {
      if (!func) return null

      setLoading(true)
      const v = await func(...args)
        .then((tx) => {
          if (tx.hash) {
            setHash(tx.hash)
          }
          tx.wait().then(_tx => {
            setLoading(false)
          })
        })
        .catch((e) => {
          setError(null)
          setLoading(false)
          console.log(e)
          if (
            e.error?.data?.message &&
            e.error.data.message.indexOf(':') !== -1
          )
            setError(e.error.data.message.split(':')[1].trim())
          else setError(e.message)
          return null
        })

      return v
    },
    [func]
  )

  return [call, loading, error, hash] 
}

export function useReader (func) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const call = useCallback(
    async (...args) => {
      if (!func) return null
      setLoading(true)
      const v = await func(...args).catch((e) => {
        setError(null)
        setLoading(false)
        console.log(e)
        if (e.error?.data?.message && e.error.data.message.indexOf(':') !== -1)
          setError(e.error.data.message.split(':')[1].trim())
        else setError(e.message)
        return null
      })

      return v
    },
    [func]
  )

  return [call, loading, error] 
}

export function useContract(address , abi) {
  const { web3, signer } = useWeb3Context()
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  async function initContract() {
    let contract = new ethers.Contract(address, abi, web3)

    if (signer) {
      contract = await contract.connect(signer)
    }
    setController(contract)
  }

  useEffect(() => {
    if (web3 && address) {
      initContract()
    } else {
      if (!web3) setController(null)
    }
  }, [address, web3, signer])

  return {
    error,
    contract: controller,
  }
}
