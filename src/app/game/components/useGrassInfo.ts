import {Grass} from './type'
import { useEffect, useState} from 'react'

export default function useGrassInfo() {
  const [grassInfo, setGrassInfo] = useState<Grass[]>([])

  const updateGameStatus = async () => {
    const response = await fetch('http://1.116.37.183:8080/game/grass/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }
  useEffect(() => {
    updateGameStatus()
  }, [])
  return {
    totalGrass: grassInfo?.length,
    grasses: grassInfo,
    updateGrasses: updateGameStatus
  }
}