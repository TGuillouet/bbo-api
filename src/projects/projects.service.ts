// @ts-ignore
import { Injectable } from '@nestjs/common';
import {Project} from './interfaces/Project';
import {getDocumentsFromCollection} from '../helpers/firebase';

@Injectable()
export class ProjectsService {
    async getProjects(): Promise<Project[]> {
        return getDocumentsFromCollection<Project>('projects');
    }
}
