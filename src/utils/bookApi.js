/**
 * Created by Administrator on 2016/11/1.
 */
import Vue from 'vue'
import axios from 'axios'

const HOST = 'http://api.book.diandianys.com'

const basePostData = {
    random: "1234",
    spid: "1001",
    channel: "21",
    format: "JSON",
    oper: "127.0.0.1",
    sign: "3f52f63fad63c5dd209d28420977fb5d",
}

let bookApi=(service,postData)=>{
    return axios.post(HOST, {service:service, ...basePostData, ...postData })
}

export default bookApi