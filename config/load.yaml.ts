import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = () => {
    const env = process.env.NODE_ENV;
    if (env === 'dev' || env === 'test') {
      return `config/.env.application.${env}.yaml`;
    }
  
    return null;
  };

export default () => {
  const filename = YAML_CONFIG_FILENAME();
  return yaml.load(
    readFileSync(join(process.cwd(), filename), 'utf8'),
  ) as Record<string, any>;
};

export type databaseConfig = {
  db: {
    type: string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    synchronize: boolean,
  }
};