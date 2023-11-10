interface TaskItemProps {
  text: string,
  taskIndex: number
  removeItemFunction: (indexToRemove: number) => void
}

export function TaskItem({ text, removeItemFunction, taskIndex }: TaskItemProps) {
  return (
    <li>
      {text}
      <button onClick={() => removeItemFunction(taskIndex)}>
        remove
      </button>
    </li>
  )
}