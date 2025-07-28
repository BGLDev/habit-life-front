export type Uuid = number
export type Timestamp = number

export interface BaseModel {
  id:Uuid
  createDate:Timestamp
  updateDate:Timestamp
}
