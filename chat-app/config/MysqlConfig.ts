interface MySqlConfig {
    password: string,
    username: string,
    host: string,
    database: string,
    port: number,
}

export const MySqlConfig: MySqlConfig = {
    password: '123456abcd',
    username: 'chat_app',
    host: '147.182.220.179',
    database: 'chatApp',
    port: 3306,
}