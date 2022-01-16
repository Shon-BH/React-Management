import React from 'react';
import PlanList from '../PlanList';

import WebAssetIcon from '@mui/icons-material/WebAsset';

const Inbox = () => {
    return (
        <div>
            <h1><WebAssetIcon/>생산계획목록</h1>
            <PlanList/>
        </div>
    );
};

export default Inbox;