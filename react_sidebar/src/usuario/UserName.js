import getIniciais from './UserInicials';

function UserName(props){
    return (
        <div className="user">
            <div className="iniciais">
                {getIniciais(props['user-name'])}
            </div>
            <div className="cargo">
                {props.cargo}
            </div>
            <div className="user_name">
                {props['user-name']}
            </div>
        </div>
    )
}

export default UserName;