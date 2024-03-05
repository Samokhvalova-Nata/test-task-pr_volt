import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { useSelector } from 'react-redux'
import { selectTasks } from 'redux/selectors'

export const TaskCounter = () => {
  const tasks = useSelector(selectTasks)

  const count = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed += 1
    } else {
      acc.current += 1
    }
      return acc
  }, { current: 0, completed: 0 }
  )
  
  return (
    <Stack as="div">
      <h5>Tasks</h5>
      <div>Current: {count.current}</div>
      <div>Completed: {count.completed}</div>
    </Stack>
  )
}
