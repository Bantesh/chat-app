const users = []

const addUser = ({ id, username, room }) => {

    //clean Data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // validate data
    if (!username || !room) {
        return {
            error: 'username and room are required'
        }
    }
    const existintUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    //validate existing data
    if (existintUser) {
        return {
            error: 'username already in use!'
        }
    }
    const user = { id, username, room }
    users.push(user)
    return { user }
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index != -1) {
        return users.splice(index, 1)[0] // return a array of removed items
    }

}
const getUser = (id) => {
    return users.find((user) => user.id === id)
}
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}
module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
