import React from 'react';
import list from '../Assistance/List.json';
import Cards from './Cards.jsx';

function Freebook() {
    const freecourse = list.filter((data) => data.id <=4).slice(0,4);
          
    return (
        <>
            <div >
                <div>
                    <div className=' px-20 mb-2 mt-4 text-2xl font-bold'><h3>Latest Posts</h3></div>
                    <div className='px-20 mb-10 font-semibold'><p>Welcome to the AI & ML Community Buzz – Your Space to Share and Explore!

Stay updated with the latest trends, breakthroughs, and insights in artificial intelligence and machine learning. Share your knowledge, discuss innovations, and connect with experts in the field. Whether you're a researcher, developer, or enthusiast, this platform is built for collaboration and discovery. Post, engage, and shape the future of AI together!"</p></div>
                </div>
                <div className='md:flex'>
                    
                    {freecourse.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Freebook;
