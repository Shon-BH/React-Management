import React from 'react';
import NestedGrid2 from '../NestedGrid2';

import WebAssetIcon from '@mui/icons-material/WebAsset';

const Inbox = () => {
    return (
        <div>
            <h1><WebAssetIcon/>생산계획목록</h1>
            <NestedGrid2/>
        </div>
    );
};

export default Inbox;