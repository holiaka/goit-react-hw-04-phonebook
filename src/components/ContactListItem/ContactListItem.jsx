import PropTypes from 'prop-types';
import { DeleteButton, Item } from './ContactListItem';

export const ContactListItem = ({ id, name, number, deleteContact }) => {  
  return (    
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteButton type="button" id={id} onClick={deleteContact}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
