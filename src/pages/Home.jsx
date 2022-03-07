import React, {useEffect} from 'react';
import {getUserData} from "../state/user/userAction";
import {connect} from "react-redux";

const Home = ({userState, getUserData}) => {
    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>
            <h1>user List</h1>

            {userState.isLoading ?
                <h3>Loading...</h3> :
                userState.userList !== null &&
                userState.userList.map(user => (
                    <div>
                        <span>{user.name}</span>
                        {/*<button>Delete</button>*/}
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userState: state.userReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);