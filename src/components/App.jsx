import { Toaster } from "react-hot-toast"
import { AppBar } from "./AppBar/app-bar"
import { TaskList } from "./TaskList"

export const App = () => {
  return (
    <>
      <AppBar/>
      <TaskList/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
