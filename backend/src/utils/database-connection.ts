import { sequelize } from '../models'

const MODELS_SYNC = process.env.MODELS_SYNC

function SQLDatabaseConnect(){
    sequelize[MODELS_SYNC == 'true' ? 'sync' : 'authenticate']({}).then(()=>{
        console.log("SQLDatabaseConnect Database Connected ...!!!")
    }).catch(err => {
        console.log("Error While Connecting SQLDatabaseConnect Database")
        setTimeout(()=>{
            SQLDatabaseConnect()
        },5000)
    })
}

SQLDatabaseConnect()