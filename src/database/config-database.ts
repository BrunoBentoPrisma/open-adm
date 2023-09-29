import { Entities } from './entities-config';

export const ConfigDatabase = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '151580',
  database: 'opemadm',
  entities: [...Entities],
  synchronize: true,
};
