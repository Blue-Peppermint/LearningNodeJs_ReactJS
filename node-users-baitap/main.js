
// import axios from 'axios';
const axios = require('axios');

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = 4000;
const usersAPI = "http://localhost:3001/users";


app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.get('/users', async (req, res) => {
    const userId = req.query?.id;

    try {
        if (userId) {
            var data = await getUser(userId);
            res.send(data);
        } else {
            var data = await getUsers();
            res.send(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.delete('/users', async (req, res) => {
    const deleteUserId = req.body?.userId;

    try {
        await deleteUser(deleteUserId);
        // res.send(data);
        res.status(200).json({ message: 'Xóa Thành Công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/users', async (req, res)=>{
    const userInfo = req?.body;

    try {
        await updateUser(userInfo);
        res.status(200).json({ message: 'Cập Nhật Thành Công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/users', async (req, res)=>{
    const userInfo = req?.body;

    try {
        await registerUser(userInfo);
        res.status(200).json({ message: 'Đăng Ký Thành Công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

async function deleteUser(userId) {

    try {
        await axios({
            method: "DELETE",
            url: usersAPI + "/" + userId,
            headers: { "Content-Type": "application/json" }
          });
    } catch (error) {
        console.log(error);
    }
}

async function getUsers() {
    let result;
    try {
        result = await axios(usersAPI);
    } catch (error) {
        console.log(error);
    }

    return result?.data;
}

async function getUser(userId){
    let result;
    try {
        result = await axios(`${usersAPI}?id=${userId}`);
    } catch (error) {
        console.log(error);
    }

    return result?.data;
}

async function updateUser(userInfo){
    try {
        await axios({
            method: "PUT",
            // url: `${usersAPI}?id=${userInfo.id}`,
            url: `${usersAPI}/${userInfo.id}`,
            data: userInfo,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.log(error);
    }
}

async function registerUser(userInfo){
    userInfo.id = await getNewUserId();
    userInfo.avatar =  'avatar/' + userInfo.avatar

    try {
        await axios({
            method: "POST",
            url: usersAPI,
            data: userInfo,
            headers: { "Content-Type": "application/json" },
          })
    } catch (error) {
        console.log(error);
    }
}

async function getNewUserId(){
    const users = await getUsers();

    const newId = (Math.max(...users.map(s => parseInt(s.id))) + 1).toString();

    return newId;
}