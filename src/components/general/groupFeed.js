import Post from "../posts/post";

const ClubFeed = () => {
    return (  
        <>
            <div className="w-full flex justify-center">
                <div className="flex flex-col w-2/3 justify-center items-center mt-5">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </>
    );
}
 
export default ClubFeed;