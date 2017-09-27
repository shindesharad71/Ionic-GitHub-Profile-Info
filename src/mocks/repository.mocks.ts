import { Repository } from '../models/repository.interrface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
  {
    name: 'Repo',
    description: 'A Test Repository',
    owner: USER_LIST[0]
  },
  {
    name: 'Repo 2',
    description: 'A Test Repository',
    owner: USER_LIST[0]
  },
  {
    name: 'Repo 3',
    description: 'A Test Repository',
    owner: USER_LIST[0]
  },
  {
    name: 'Repo 4',
    description: 'A Test Repository',
    owner: USER_LIST[0]
  }
];

export const REPOSITORY_LIST = repositoryList;
