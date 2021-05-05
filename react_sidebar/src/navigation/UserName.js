function UserName(props){
    return (
        <div className="user">
            <div className="iniciais">

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