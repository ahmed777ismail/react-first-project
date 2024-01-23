import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Moment from "react-moment";

const SubTasksSection = ({ user, stringId }) => {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));

  if (value) {
    console.log(value.data().completed);
    return (
      <section className="sub-task mtt">
        <div className="parent-time">
          <p className="time">
            Created: <Moment fromNow date={value.data().id} />
          </p>
          <div>
            <input
              onChange={() => {}}
              checked={value.data().completed}
              id="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox">Completed </label>
          </div>
        </div>

        <ul>
          {value.data().details.map((item) => {
            return (
              <li key={item} className="card-task flex">
                <p> {item} </p>
                <i className="fa-solid fa-trash"></i>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};

export default SubTasksSection;