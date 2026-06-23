import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={style.list}>
            {contacts.map((contact) => (
                <li className={style.item} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
            </li>))}
        </ul>   
    );
};

export default ContactList;