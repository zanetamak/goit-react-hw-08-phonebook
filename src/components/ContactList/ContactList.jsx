import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  IconButton,
  CloseButton,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = async (id) => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  // Filtrowanie kontaktów na podstawie wartości filtra
  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SimpleGrid columns={[1, null, 2]} spacing={5} mx="auto" maxW="400px">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <Card key={id}>
                <CardHeader>
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDeleteContact(id)}
                  />
                </CardHeader>
                <CardBody>
                  <Text>{name}</Text>
                  <Text>{number}</Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Text>No contacts found</Text>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default ContactList;

// Dodanie filteredContacts.length > 0 przed mapowaniem, aby sprawdzić,
// czy są dostępne kontakty do wyrenderowania.

// ułatwia układ komórkowy (grid layout). Jest to prosty sposób na tworzenie siatek o stałej liczbie
// kolumn, które automatycznie dostosowują się do szerokości ekranu.