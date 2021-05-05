import Option from './navigation/Option';
import Logo from '../src/img/Logo.svg';
import icones from './Icons';
import usuario from './usuario/Usuario';
import UserName from './usuario/UserName';

function Sidebar(){
    return (
        <aside>
        
        <a href="#" id="logo">
            <img src={Logo} alt=""/>
        </a>
        
        <UserName cargo={usuario.cargo} user-name={usuario.name}></UserName>
        
        <nav>
            <Option value="Dashboard" image={icones.dashboard}/>
            <Option value="Trades" image={icones.trades}/>
            <Option value="Organizations" image={icones.organizations}/>
            <Option value="Users" image={icones.users}/>
            <Option value="Rate Settings" image={icones.settings}/>
        </nav>
        <div className="logout">
        Logout
        </div>
        </aside>
        );
    }
    
    export default Sidebar;