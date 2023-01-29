import PropTypes from "prop-types";
import { ContactListItem } from "components/ContactListItem/ContactListItem.jsx";
import { Wrapper } from './ContactList';

export const ContactList = ({ contacts, deleteContact }) => {
    return (<Wrapper>
        {contacts().map(({ id, name, number }) => (            
            <ContactListItem key={id} id={id} name={name} number={number} deleteContact={deleteContact}></ContactListItem>           
        ))}
    </Wrapper>);
}

ContactList.propTypes = {
    contacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
}