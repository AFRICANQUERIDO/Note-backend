import mssql from "mssql";


export const sqlConfig = {
  
  user: 'sa',
  password: 'sql.jane',
  database: 'PROJECTS',
  server:'DESKTOP-G3PNO3V',

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
console.log(sqlConfig);

