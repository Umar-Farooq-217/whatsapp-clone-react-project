import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = []

const addUser = (userData, socketId) => {
    if (!userData || !userData.sub) return;
    !users.some(user => user.sub == userData.sub) && users.push({ ...userData, socketId })
}
const getUser = (userId)=>{
    return users.find(user => user.sub === userId)
}
io.on('connection', (socket) => {
    console.log('user is connected');
    // socket.on('addUsers', userData => {
    //     addUser(userData, socket.id)
    //     io.emit('getUsers', users)
    // })

    socket.on('addUsers', userData => {
        addUser(userData, socket.id)
        console.log('Current users:', users)
        io.emit('getUsers', users)
    })
    

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId)
        if (user) {
            io.to(user.socketId).emit('getMessage', data)
        }
    })
    
//     socket.on('sendMessage', data => {
//         const user = getUser(data.receiverId)
//         io.to(user.socketId).emit('getMessage', data)
//     })
// })


})