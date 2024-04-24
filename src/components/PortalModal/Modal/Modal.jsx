import styles from './modal.module.css';
import Button from '../../../components/Form/Button';
import { RxCross2 } from "react-icons/rx";
import { selectContacts } from '../../../redux/contacts/contacts-selector';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEditContact } from '../../../redux/contacts/contacts-operations';
import { toast } from "react-toastify";

const Modal = ({ onClose, currentId }) => {
  const allContacts = useSelector(selectContacts);
  const selectItem = allContacts.find(item => item._id === currentId);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    id: '',
  });

  useEffect(() => {
    if (selectItem) {
      setFormData({
        name: selectItem.name,
        phone: selectItem.phone,
        id: selectItem._id,
      });
    }
  }, [selectItem]);

  const onChangeInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  
  const onSubmitForm = (event, id) => {
    event.preventDefault()
    const contact = {
    name: formData.name,
    phone: formData.phone
    };
    const { name } = formData;
    const isExist = allContacts.findIndex(el => el.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());
    if (isExist >= 0) {
      toast.warning(`Contact ${name} is already exists!`);
      return;
    }
    dispatch(fetchEditContact({ id: id, contact: contact }));
    onClose();
  };
 
const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose(); 
    }
  };

   const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={(e) => onSubmitForm(e, formData.id)}>
          <label htmlFor="name">Name</label>
          <input className={styles.input} onChange={onChangeInput} value={formData.name} type="text" name="name" id="username" required />
        
          <label htmlFor="tel">Phone number </label>
          <input className={styles.input} onChange={onChangeInput} value={formData.phone} type="tel" name="phone" id="tel" required />
       
          <Button type="submit" text="Edit contact" />
        </form>
        <button className={styles.btnModalClose} onClick={onClose}>
          <RxCross2 className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
export default Modal;
