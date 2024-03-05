import Card from 'react-bootstrap/Card'

export const NoTasks = () => {
  return (
    <Card as="div" style={{ width: '40rem' }} border="primary" className="my-4 mx-auto p-4 d-flex justify-content-center align-items-center">
      <Card.Title>There is no tasks yet</Card.Title>
      <Card.Text>Click button "Add task" to start</Card.Text>
    </Card>
  )
}
