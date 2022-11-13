import * as React from 'react';
import CreateClub from '../../../components/club/createClub';
import ClubList from '../../../components/club/clubList';


export default function Clubs() {

  return (
    <>
        <div className='flex flex-col items-end justify-start bg-gray-100 min-h-screen'>
            <div className='flex flex-col' style={{"width": "80%"}}>
                <CreateClub/>
                <ClubList/>
            </div>
        </div>
    </>
  );
}
