import Notiflix from "notiflix";
import FormAddContact from "./FormAddContact/FormAddContact";
import ContactList from "./ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Phonebook.module.css";
import { addContact, removeContact } from "redux/Contacts/Contacts-slice";
import { setFilter } from "redux/Filter/Filter-slice";
import { getFilter } from "redux/Filter/Filter-selectors";
import { getFilteredContacts } from "redux/Contacts/Contacts-selectors";


const Phonebook = () => {
  
    const contacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const onAddContact = (contact) => {
    if (isDuplicate(contact)) {
        return Notiflix.Notify.info(`${contact.name} - ${contact.number} is already in contacts`);
    }
    const action = addContact(contact);
        dispatch(action);
  }
    const onRemoveContact = (id) => {
       const action = removeContact(id);
        dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }
        
    const isDuplicate = ({name, number}) => {
        const result = contacts.find((item) => item.name === name && item.number === number);
        return result;
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.contactBlock}>
                <div>
                    <FormAddContact onSubmit={onAddContact} />
                </div>
                    <div>
                    <h3>Find contacts by name</h3>
                    <input type="text" name="filter" onChange={handleChange} value={filter} className={styles.filter} placeholder="Filter" />
                    <ContactList items={contacts} removeContact={onRemoveContact} />
            </div>
            </div>
      </div>
    )   
    }

export default Phonebook;