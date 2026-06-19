import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ data: { name, number } }) => {
  return (
    <div className={style.contactItem}>
      <div className={style.info}>
        <p className={style.text}>
          <FaUser />
          {name}
        </p>
        <p className={style.text}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={style.button} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
