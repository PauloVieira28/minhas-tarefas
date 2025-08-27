import * as enums from '../utils/enums/task'

class TaskModels {
  title: string
  priority: enums.Priority
  status: enums.Status
  id: number
  description: string

  constructor(
    title: string,
    priority: enums.Priority,
    status: enums.Status,
    id: number,
    description: string
  ) {
    this.title = title
    this.priority = priority
    this.status = status
    this.id = id
    this.description = description
  }
}

export default TaskModels
