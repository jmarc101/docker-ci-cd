import axios from 'axios';

// GET
const getValues = async () => await axios.get('/api/values/current').catch(console.error);
const getIndexes = async () => await axios.get('/api/values/all').catch(console.error);

// POST
const postValues= async (index) => await axios.post('/api/values', { index }).catch(console.error);

export { getValues, getIndexes, postValues };