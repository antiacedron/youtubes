import axios from "axios"; 


const KEY = "AIzaSyAQMohRcup3prp0A7Y6aMlUsEpJZ4xeiXs"; 

export default axios.create ({ 
       baseURL: "https://www.googleapis.com/youtube/v3",
       params: {
        "part":"snippet", 
        maxResults: 5,
        key: KEY 
       }
}); 