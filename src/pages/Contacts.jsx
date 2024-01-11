import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <h1>Phonebook</h1>
      </Helmet>
      <ContactForm />
      {isLoading && <div>Request in progress...</div>}
      {!isLoading && <Filter />}
      <ContactList />
    </div>
  );
};

export default App;

 // Jeśli isLoading jest prawdziwe, renderuje null,
 // w przeciwnym razie renderuje komponent Filter.

// czy lepiej uzywac chakra tutaj? jesli nie to dlaczego ? 