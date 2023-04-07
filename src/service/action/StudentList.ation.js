import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING, GET_STUDENTS } from "../constant/actionType"
import { db } from "../../Firebase/Firebase";
import { doc, setDoc, collection, getDocs,getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const creatStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}

export const getStu = (data) => {
    return {
        type: GET_STUDENTS,
        payload: data
    }
}

export const creatStudentAsync = (data) => {
    return dispatch => {
        
        dispatch(loading())
        setTimeout(() => {
            dispatch(creatStudent(data))
        }, 2000)
    }
}
export const loading = () => {
    return {
        type: LOADING
    }
}

export const DeleteStudent = () => {
    return {
        type: DELETE_STU,
    }
}

export const DeleteStudentAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(DeleteStudent())
        }, 2000)
    }
}

export const getSingleStudent = (data) => {
    return {
        type: GET_INFO,
        payload: data
    }
}

// export const GetInfoAsync = () => {
//     return dispatch => {

//         dispatch(loading())
//         setTimeout(() => {
//             dispatch(GetInfo())
//         }, 2000)
//     }
// }

export const UpdateStu = () => {
    return {
        type: UPDATE_STU,
    }
}

export const UpdateStuAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(UpdateStu())
        }, 2000)
    }
}

export const createStud = (data) => {
    // return async diapatch =>{
    //  await addDoc(collection(db, "student"),data).then((res)=>{
    //      // console.log("data",res);
    //      diapatch(creatStudent())
    //  }).catch((err)=>{
    //      console.log("error",err);
    //  })
    // }
    return async dispatch => {
        await setDoc(doc(db, "student", `${data.id}`), data).then((res) => {
            // console.log("data",res);
            dispatch(getstudents())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}
export const getstudents = () => {
    return async dispatch => {
        await getDocs(collection(db, "student")).then((res) => {
            let newArr = [];
            res.forEach((doc) => {
                newArr = [...newArr, doc.data()]
            })
            dispatch(getStu(newArr))
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}
export const getStus =(id)=>{
    return dispatch =>{
        getDoc(doc(db,"student",`${id}`)).then((res)=>{
            // console.log(res.data());
            dispatch(getSingleStudent(res.data()))
        }).catch((err)=>{
            console.log("error",err);
        })
    }
}
export const UpdateStuinitiate = (data)=>{
    return dispatch =>{
        updateDoc(doc(db,"student",`${data.id}`),data).then((res)=>{
            dispatch(UpdateStu())
        }).catch((err)=>{
            console.log("error",err);
        })
    }
}
export const DeleteStu =(id)=>{
    return dispatch =>{
        deleteDoc(doc(db,"student",`${id}`)).then((res)=>{
            console.log("delete data");
            dispatch(getstudents())
        }).catch((err)=>{
            console.log("error",err);
        })
    }
}