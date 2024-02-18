import Form from '../../components/Form/Form';
import Title from "../../components/Form/Title";

import ContactList from "../../components/Form/ContacsList";
import Filter from "../../components/Form/FilterSearch";


const PhonebookList = () => {
  
  return (
          <main className='container'>
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