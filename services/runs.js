import React, { Component } from 'react';
import axios from 'axios';

class runsService {
    getRun(id) {
        return axios.get('http://agurz.ddns.net:9000/runs/'+id+'?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTFkNTIxMjFkYTJiMThiNDVkNzQzNSIsImlhdCI6MTUyNDc2MDUyMH0.cM_kFZ9tarf2V0hoz6OG51529cU2KLoOtvP9Ox6iZPc')
    }
    getRunState(id) {
        return axios.get('http://agurz.ddns.net:9000/runs/'+id+'/state?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTFkNTIxMjFkYTJiMThiNDVkNzQzNSIsImlhdCI6MTUyNDc2MDUyMH0.cM_kFZ9tarf2V0hoz6OG51529cU2KLoOtvP9Ox6iZPc')
    }
    getRuns() {
        return axios.get('http://agurz.ddns.net:9000/runs?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTFkNTIxMjFkYTJiMThiNDVkNzQzNSIsImlhdCI6MTUyNDc2MDUyMH0.cM_kFZ9tarf2V0hoz6OG51529cU2KLoOtvP9Ox6iZPc')
    }
}

export default new runsService();