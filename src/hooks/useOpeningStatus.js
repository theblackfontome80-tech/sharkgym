import { useEffect, useState } from 'react'
import { getOpeningStatus } from '../lib/hours'

export function useOpeningStatus() {
  const [status, setStatus] = useState(() => getOpeningStatus())
  useEffect(() => {
    const id = setInterval(() => setStatus(getOpeningStatus()), 30_000)
    return () => clearInterval(id)
  }, [])
  return status
}
