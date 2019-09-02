import { createConnection, Connection } from 'mysql';

class Database {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: 'localhost',
      user: 'pascualex',
      password: 'pascualex',
      database: 'oc'
    });
  }

  query(sql: string, args: any = null): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  close(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export const database: Database = new Database();