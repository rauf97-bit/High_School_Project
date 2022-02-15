import React from "react";
import { useState, useRef } from "react";

const Main = () => {
  const [subject, setSubject] = useState([]);
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  // Add Student
  const addStudent = () => {
    const name = myRef.current.value;
    const ca = parseInt(myRef2.current.value);
    const exam = parseInt(myRef3.current.value);
    const total = ca + exam;
    const getGrade = () => {
      if (total < 39) {
        return "F";
      } else if (total >= 39 && total <= 49) {
        return "D";
      } else if (total >= 49 && total <= 59) {
        return "C";
      } else if (total >= 59 && total <= 69) {
        return "B";
      } else {
        return "A";
      }
    };
    const grade = getGrade();
    const completed = false;
    const position = "";
    setSubject((prevSub) => {
      const id = prevSub.length + 1;
      return [
        ...prevSub,
        {
          id: id,
          name: name,
          ca: ca,
          exam: exam,
          total: total,
          grade: grade,
          position: position,
          completed: completed,
        },
      ];
    });
    myRef.current.value = null;
    myRef2.current.value = null;
    myRef3.current.value = null;
  };

  // Delete Student
  const deleteStudent = (id) => {
    setSubject(subject.filter((subJ) => subJ.id !== id));
  };

  
  
  return (
    <main className="my-container">
      <section className="subject">
        <h2>Mathematics</h2>
        <form className="input-grp">
          <input ref={myRef} type="text"  required placeholder="Student Name..." />
          <input ref={myRef2} type="text"  placeholder="CA Score.." />
          <input ref={myRef3} type="text" placeholder="Exam Score.." />
          <button onClick={addStudent}>Add Student</button>

        </form>
        <div style={{margin : 'auto', width : '5rem'}}>
        <button  className="del-btn">EXPORT</button>
        </div>
      </section>
    </main>
  );
};


export default Main
