import ProfileStudent from "../../components/profile/profile_student";
import StudentList from "../../components/student/connectStudent";

const StudentProfile = () => {
    return ( 
        <>
            <StudentList />
            <ProfileStudent />
        </>
     );
}
 
export default StudentProfile;