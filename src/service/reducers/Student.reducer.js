import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING,  GET_STUDENTS } from "../constant/actionType"

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: false,
    isEdit :false
}

const StudentReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                studentList: action.payload,
                isEdit:false
            }
            break;

        case DELETE_STU:
            const DStu = state.studentList.filter((Stu) => Stu.id !== action.payload)
            return {
                ...state,
                studentList: DStu,
                isLoading: false,
                isEdit :false
            }
            break;

        case GET_INFO:
            return {
                ...state,
                studentInfo: action.payload,
                isLoading: false,
                isEdit:true
            }
            break;

        case UPDATE_STU:
            return {
                ...state,
                studentInfo:{},
                isLoading: false,
                isEdit:false
            }
            break;
        case LOADING: {
            return {
                ...state,
                isLoading: true,
                isEdit:false
            }
        }
            break;

        default:
            return state;
    }
}

export default StudentReducer;