import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './Footer.module.css';
import { eventsList } from '../../constants';

const Footer = () => {
    
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    
    const count = Math.ceil((eventsList.length + 1) / 8);
    const page = +search.split('=').reverse()[0];

    const changePage = (_: any, number: number) => {
        navigate(`${pathname}?page=${number}`);
    };

    return (
         <div className={style.Footer}>
            {pathname === '/events' ? <Pagination
                count={count}
                page={page}
                onChange={changePage}
            />: pathname.split('/')[1]}
        </div >
    )
};

export { Footer };