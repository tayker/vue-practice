import axios from '../axios';

export const getUsers = () => axios.get('http://localhost:3000/users');

export const createUser = (params) => axios.post('http://localhost:3000/users', params);

export const deleteUser = (id) => axios.delete(`http://localhost:3000/users/${id}`);

export const getSingleUser = (id) => axios.get(`http://localhost:3000/users/${id}`);

export const editUser = (id, params) => axios.put(`http://localhost:3000/users/${id}`, params);