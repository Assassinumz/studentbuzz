import { Outlet } from "react-router-dom";
import "./search.css"

const FormStudent = () => {

    return ( 
        <>
            <div className="flex p-6 student_form_container">
                <div className="mx-auto"> 
                    <h4>Find Partner</h4>
                    <form  className="rounded-md border bg-[#f8fafc] shadow-xl border-[#6366f1] py-[1.5em] px-[4em] student_form">
                    <div className="mb-3">
                            <label for="name" className="mb-2 block text-base font-medium text-black" >University</label>
                            <input type="text" name="university" id="university" placeholder="Eg. Reva University" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="mb-2 block text-base font-medium text-black" >Branch</label>
                            <input type="text" name="name" id="name" placeholder="Eg. Computer Science" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="mb-2 block text-base font-medium text-black" >USN</label>
                            <input type="text" name="usn" id="usn" placeholder="Eg. Web Development" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="mb-2 block text-base font-medium text-black" >Tech Stack</label>
                            <input type="text" name="tech_stack" id="tech_stack" placeholder="Eg. NodeJS" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        {/* <div style={{"display":"flex", "justifyContent":"center"}}>
                            <button className="hover:shadow-form rounded-md bg-[#6366f1] py-2 px-3 text-base font-normal text-white outline-none" > Search </button>
                        </div> */}
                    </form>
                </div>
            </div>
            <Outlet />
        </>
     );
}
 
export default FormStudent;