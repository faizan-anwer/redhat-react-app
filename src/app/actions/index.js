import axios from "axios";
import { CONTENT, FETCH_CONTENT } from "./types";


const apiUrl = "http://jsonplaceholder.typicode.com/users";
export function content (data) {
    return {
        type: CONTENT,
        payload: data
    };

}


// export const fetchTreeData = () => {
//     return dispatch => {
//       axios.get(apiUrl)
//         .then(res => dispatch(receiveTreeData(res.data)))
//         .catch(err => dispatch(treeRequestFailed(err)))
//     }
//   }

// export function fetch() {
//     return function(dispatch) {
//       return axios.get(apiUrl)
//         .then(({ data }) => {
//             console.log(data);
//         dispatch(fetchContent(data));
//       });
//     };
//   }
// async function fetchContent() {
  
//     let res = await axios.get(apiUrl);
  
//     let data = res.data;
//     console.log(data);
//     return {
//                 type: FETCH_CONTENT,
//                 payload: data
//             }
//   }
  




  export function fetchContent () {
    const response = axios.get(apiUrl)
         //.then(res => console.log(res.data))
    return {
        type: FETCH_CONTENT,
        payload: response
    }
}