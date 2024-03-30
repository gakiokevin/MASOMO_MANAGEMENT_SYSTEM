import { useState } from "react";
import { useCoursesContext } from "../hooks/useCourses";
import { useAuthContext } from "../hooks/useAuthContext";
const CourseForm = ({ showForm }) => {
  const { user } = useAuthContext();

  const { dispatch } = useCoursesContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outline, setOutline] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, description, outline };
    const response = await fetch(
      "https://masomo-management-system.onrender.com/courses/new-course",
      {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      const res = await fetch(
        "https://masomo-management-system.onrender.com/courses/",
        {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        }
      );
      const JSON = await res.json();
      setMessage(json.message);

      if (res.ok) {
        dispatch({ type: "SET_COURSES", payload: JSON });
      }
      setTitle("");
      setDescription("");
      setOutline("");
      setTimeout(() => {
        showForm(false);
      }, 2000);
    }
  };

  return (
    <>
   
     <form className="create" onSubmit={handleSubmit}>
      {message && (
        <p style={{ backgroundColor: "lightgreen", padding: "10px" }}>
          {message}
        </p>
      )}
       <ion-icon name="arrow-back-outline" onClick={()=>showForm(false)}></ion-icon>
      <h4>New course</h4>
      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      />
      <label>outline</label>
      <input
        type="text"
        onChange={(e) => setOutline(e.target.value)}
        value={outline}
        required
      />
      <button type="submit">Create</button>
     
    </form>
    </>
   
  );
};
export default CourseForm;
