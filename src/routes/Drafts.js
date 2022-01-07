import React from 'react';
import HeatingLogTable from '../tables/HeatingLogTable';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Drafts = () => {
    return (
        <div>
            <h1><FormatListBulletedIcon/>가열로 데이터 모니터링</h1>
            <HeatingLogTable/>
        </div>
    );
};

export default Drafts;