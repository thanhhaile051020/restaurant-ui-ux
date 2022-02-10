import { useEffect, useState } from 'react'
function useClock() {
  const [timeString, setTimeString] = useState<any>('')
  useEffect(() => {
      console.log('alo')
    const clockInterval = setInterval(() => {
      const now = new Date()
      setTimeString(now)
    }, 1000)
    

    return () => {
      console.log('clean')
      clearInterval(clockInterval)
    }
  }, [])

  return { timeString }
}

export default useClock;

