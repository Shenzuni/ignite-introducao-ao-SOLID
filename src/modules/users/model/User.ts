import { v4 as uuidv4 } from "uuid"

export class User {
  constructor(public id: string = uuidv4(), public admin: boolean = false) {
    this.created_at = new Date()
    this.updated_at = this.created_at
  }

  email: string
  name: string
  created_at: Date
  updated_at: Date
}
