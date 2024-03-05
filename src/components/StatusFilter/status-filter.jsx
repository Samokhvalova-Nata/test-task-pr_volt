import Form from 'react-bootstrap/Form'
import { useDispatch } from "react-redux"
import { setStatusFilter } from 'redux/filter-slice'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const handleFilterChange = filter => dispatch(setStatusFilter(filter))

  return (
    <Form.Select className="ms-auto w-25" aria-label="Complete status" onChange={e => handleFilterChange(e.target.value)}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </Form.Select>
  )
}