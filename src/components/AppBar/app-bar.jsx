import Stack from 'react-bootstrap/Stack'
import { StatusFilter } from "components/StatusFilter"
import { TaskForm } from "components/TaskForm"
import { TaskCounter } from 'components/TaskCounter/task-counter';

export const AppBar = () => {
    return (
      <Stack as="header" direction="horizontal" className="col-md-4 mx-auto m-3" gap={3}>
        <TaskCounter/>
        <TaskForm />
        
        <StatusFilter />
      </Stack>
    );
}
