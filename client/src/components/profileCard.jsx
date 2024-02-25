import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const ProfileCard = ({ props, handleBookmark }) => {
    return (
        <div className='w-[30%] flex justify-between items-center bg-[#DBEAFE] rounded-4 p-4'>
            <div>
                <p><span className='font-bold'>College: </span>{props.college}</p>
                <p><span className='font-bold'>Branch: </span>{props.branch}</p>
                <p><span className='font-bold'>Category: </span>{props.category}</p>
                <p><span className='font-bold'>Cutoff: </span>{props.cutoff}</p>
            </div>
            <div>
                <button onClick={() => handleBookmark({ college: props.college, branch: props.branch, category: props.category, rank: props.cutoff })} >
                    <BookmarkIcon />
                </button>
            </div>
        </div>
    )
}

export default ProfileCard
