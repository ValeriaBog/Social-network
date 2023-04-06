import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-3.jpg' alt={''}/>
            </div>
            <div className={classes.description}>
                AVA
            </div>

        </div>

    );
}

export default ProfileInfo;

