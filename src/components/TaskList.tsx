import { useState } from "react"
import { TaskItem } from "./TaskItem"

export function TaskList() {
  const [inputText, setInputText] = useState<string>('')
  const [taskList, setTaskList] = useState<string[]>([])

  function addNewTask() {
    if (!inputText) return

    setTaskList([...taskList, inputText])
    setInputText('')
  }

  function removeTask(indexToRemove: number) {
    const newList = taskList.filter((_item, index) => index !=  indexToRemove)

    setTaskList(newList)
  }

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={addNewTask}>
        Adicionar nova tarefa
      </button>
      <ul>
        {taskList.map((text, index) => (
          <TaskItem 
            key={index} 
            text={text}
            removeItemFunction={removeTask}
            taskIndex={index}
          />
        ))}
      </ul>
    </>
  )
}