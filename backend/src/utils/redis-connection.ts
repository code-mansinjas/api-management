import { createClient } from 'redis'

const USERNAME = process.env.REDIS_USERNAME || ''
const PASSWORD = process.env.REDIS_PASSWORD || ''
const HOST = process.env.REDIS_HOST || ''
const PORT = process.env.REDIS_PORT || ''

const redisClient = createClient({
    url: `redis://${USERNAME}:${PASSWORD}@${HOST}:${PORT}`
})

let showRedisError = 0
let redisConnected = false

redisClient.on('error',async (err) => {
    redisConnected = false
    if (!showRedisError++) {
        console.log(`\nError While Connecting Redis \n${err}\n Reconnecting Redis after 5000 ms`)
        await redisClient.disconnect()
        setTimeout(async () => {
            showRedisError = 0
            await connectRedis()
        }, 5000)
    }
})

async function connectRedis() {
    await redisClient.connect();
    if (!showRedisError) { console.log("Redis Connnected ...!!!"), redisConnected = true }
}

connectRedis()

function redisConnectCheck(){
    return redisConnected
}


