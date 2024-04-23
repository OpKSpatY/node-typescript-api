import config, { IConfig } from 'config';
import { connect as mongooseConnect, connection } from 'mongoose';

const dbConfig: IConfig = config.get('App.database');

export const connect = async (): Promise<void> => {
  await mongooseConnect(dbConfig.get('mongoUrl'));
};

export const close = (): Promise<void> => connection.close();


// docker run -p 27017:27017 -d mongo
// docker ps -a || grep mongo (busca imagens do mongo)
// docker start (id do container)