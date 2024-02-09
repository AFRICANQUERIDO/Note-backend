import mssql from "mssql";


export const sqlConfig = {
  
  user: '',
  password: '',
  database: '',
  server:'',

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

