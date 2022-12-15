
require('dotenv').config()
require('express-async-errors');
const cors = require('cors')
const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middlewares/error');
const NotFound = require('./middlewares/NotFound');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/catRoutes');
const connectDB = require('./shared-services/db');
const app = express();
const port = process.env.PORT || 5000
app.use(express.json())
// loging APi

app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/task', taskRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/category',categoryRouter)
app.use(NotFound)
app.use(errorHandler)


const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI)
            .then(() => { console.log('DBconecte') })
            .catch((err)=>console.log(err))
        app.listen(port, () => {
            // console.log(process.env.NAME.split(',')[0])
            console.log('serveur running ...', port);

        })
    } catch (error) {
        console.log(error)
    }

}
start()