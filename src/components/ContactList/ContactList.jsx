import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li className={style.item} key={contact.id}>
                <Contact data={contact} />
            </li>))}
        </ul>   
    );
};

export default ContactList;