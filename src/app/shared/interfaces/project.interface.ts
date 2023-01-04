import { CommonEntity } from "./common-entity.interface";
import { Task } from './task.interface';

export interface Project extends CommonEntity {
  description?: string;
  owner?: string;
  tasks?: Task[];
}
