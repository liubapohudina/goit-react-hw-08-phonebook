import Form from '../../components/Form/Form';
import Title from "../../components/Form/Title";

import ContactList from "../../components/Form/ContacsList";
import Filter from "../../components/Form/FilterSearch";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhonebookList = () => {
    return (
          <main className='container'>
      <ToastContainer />
     <Title title="Phonebook">
        <Form />
      </Title> 
      <Filter>
        <ContactList />
      </Filter>  
    </main>
    )
}

export default PhonebookList;