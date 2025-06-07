import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to="/dialogs/1">John</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Jane</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Jim</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        Hello
                    </div>
                    <div className={s.message}>
                        How are you?
                    </div>
                    <div className={s.message}>
                        I'm fine, thank you!
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
