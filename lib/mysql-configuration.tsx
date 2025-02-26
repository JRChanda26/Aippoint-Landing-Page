// import mysql from 'mysql2/promise';
// const mysqlConfiguration = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });
  
//   export default mysqlConfiguration;



import mysql from 'mysql2/promise';

const mysqlConfiguration = mysql.createPool({
    host: '192.168.0.16',
    user: 'aippoint',
    password: 'aippoint@123',
    database: 'aippoint',
});

export default mysqlConfiguration;
