import React, { Component } from 'react';
import axios from 'axios';

class runsService {
    getRuns() {
        return axios.get('http://agurz.ddns.net:9000/runs?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTFkNTIxMjFkYTJiMThiNDVkNzQzNSIsImlhdCI6MTUyNDc2MDUyMH0.cM_kFZ9tarf2V0hoz6OG51529cU2KLoOtvP9Ox6iZPc')
            //headers: {
            //    'Content-Type': 'application/json',
            //    'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTFkNTIxMjFkYTJiMThiNDVkNzQzNSIsImlhdCI6MTUyNDc2MDUyMH0.cM_kFZ9tarf2V0hoz6OG51529cU2KLoOtvP9Ox6iZPc'
            //},
            //data: JSON.stringify({ })
    }
}

export default new runsService();