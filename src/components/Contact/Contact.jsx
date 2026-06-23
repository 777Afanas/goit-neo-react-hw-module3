import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={style.card}>
      <div className={style.infoWrapper}>
        <p className={style.infoLine}>
          <FaUser />
          {name}
        </p>
        <p className={style.infoLine}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={style.button} type="button" onClick={()=> onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
