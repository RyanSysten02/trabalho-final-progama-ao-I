import mysql from 'mysql2/promise';

export default async function Conectar() {
    if (global.poolconexoes) {
        return await global.poolconexoes.getConnection(); 
    }

    const pool = await mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadinscricao',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    });

    global.poolconexoes = pool;
    return await pool.getConnection();
}

