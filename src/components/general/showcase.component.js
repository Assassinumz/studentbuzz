import Post from "../posts/post";
import {useEffect, useState} from 'react'

const Showcase = (props) => {
    // console.log(props)
    
    return (  
        <>
            <div className='w-1/2 mt-16'> 
                {
                    props.postsFac?.map((item, key) => {
                        return (
                            <Post key={key} title={item.title} description={item.content} author={item.authorName} time={item.createdAt} image={item.image}/>
                        )
                    })
                }
                
            </div>
        </>
    );
}
 
export default Showcase;