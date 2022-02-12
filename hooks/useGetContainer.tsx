import { useEffect, useState } from 'react'
function useClock() {
  const [timeString, setTimeString] = useState<any>('')

  const getCurrentContainer = (value: number) => {
    let containers = ['home', 'about', 'menu', 'chef', 'intro', 'gallery']
    let currentHeight = 70

    for (let i = 0; i < containers.length; i++) {
      let cont = containers[i]
      let element: any = document.getElementById(cont)?.getBoundingClientRect()
      currentHeight += element.height
      if (value <= currentHeight) {
        return cont
      }
    }
    return containers[containers.length - 1]
  }

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

