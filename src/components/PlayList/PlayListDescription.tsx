import React, {FC} from 'react';

const PlayListDescription: FC<string | any> = ({singer}) => {
    return (
        <p className="text-sm text-[#b3b3b3] line-clamp-2">
            {singer}
        </p>
    );
};

export default PlayListDescription;