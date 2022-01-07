import React from 'react';
import ProductLogTable from '../tables/ProductLogTable';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Starred = () => {
    return (
        <div>
            <h1><FormatListBulletedIcon/>공정 데이터 모니터링</h1>
            <ProductLogTable/>
        </div>
    );
};

export default Starred;