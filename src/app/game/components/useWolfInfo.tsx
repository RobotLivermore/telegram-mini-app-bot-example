import {Wolf} from './type'
import { useEffect, useState} from 'react'

export default function useWolfInfo() {
  const [grassInfo, setGrassInfo] = useState<Wolf[]>([])

  const updateGameStatus = async () => {
    const response = await fetch('/api/game/wolf/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }
  useEffect(() => {
    updateGameStatus()
  }, [])
  return {
    totalWolves: grassInfo?.length,
    wolves: grassInfo,
    updateWolves: updateGameStatus
  }
}