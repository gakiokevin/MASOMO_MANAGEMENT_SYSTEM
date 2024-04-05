import { Link } from "react-router-dom";
import { useCoursesContext } from "../hooks/useCourses";
const Course = () => {
  const { courses } = useCoursesContext();
  if (courses.length === 0) {
   return (
     <div className="container mt-4">
       <div className="row justify-content-center">
         <div className="col-lg-10 col-md-10 col-12">
           <div className="card border-0 shadow">
             <div className="card-header bg-transparent border-0">
               <Link to="/dashboard" className="text-decoration-none">
                 <ion-icon name="arrow-back-outline"></ion-icon>
               </Link>
             </div>
             <div className="card-body ">
               <h4 className="card-title mb-4 text-center">Courses</h4>
               <div className="mb-4 bg-light">
                 <h5 className="font-weight-bold text-center text-bg-success">
                   No Courses Available
                 </h5>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }

 return (
   <div className="container mt-4">
     <div className="row justify-content-center">
       <div className="col-lg-10 col-md-10 col-12">
         <div className="card border-0 shadow">
           <div className="card-header bg-transparent border-0">
             <Link to="/dashboard" className="text-decoration-none">
               <ion-icon name="arrow-back-outline"></ion-icon>
             </Link>
           </div>
           <div className="card-body ">
             <h4 className="card-title mb-4 text-center">Courses</h4>
             {courses.map((course, index) => (
               <div
                 key={index}
                 className={`mb-4 ${
                   index % 2 === 0 ? "bg-light" : "bg-secondary"
                 }`}
               >
                 <h5 className="font-weight-bold text-center text-bg-success">
                   Course {index + 1}
                 </h5>
                 <div className="mt-2">
                   <div className="mb-4">
                     <h5 className="font-weight-bold  px-2">Title:</h5>
                     <p className="mb-0 px-3">{course.title}</p>
                   </div>
                   <div className="mb-4">
                     <h5 className="font-weight-bold px-2">Description:</h5>
                     <p className="mb-0 px-3">{course.description}</p>
                   </div>
                   <div className="mb-4">
                     <h5 className="font-weight-bold  px-2">
                       Course Outline:
                     </h5>
                     <p className="mb-0 px-3">{course.outline}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   </div>
 );
   
};
export default Course;



