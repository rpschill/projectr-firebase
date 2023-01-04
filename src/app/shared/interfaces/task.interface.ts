import { CommonEntity } from "./common-entity.interface";

export interface Task extends CommonEntity {
  completed: boolean;
  due_date?: Date;
  owner?: string;
  children?: Task[];
}
