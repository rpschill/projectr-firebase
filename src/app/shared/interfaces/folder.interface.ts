import { CommonEntity } from "./common-entity.interface";
import { Project } from "./project.interface";

export interface Folder extends CommonEntity {
  description?: string;
  owner?: string;
  projects?: Project[];
}
