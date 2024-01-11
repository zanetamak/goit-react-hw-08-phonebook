import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  Text,
  IconButton,
  CloseButton,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          (contact.phone && contact.number.includes(filter))
      )
    : [];

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SimpleGrid columns={3} spacing={1} overflow="hidden" width="800px">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <Box
                key={id}>
                <Box p="1">
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDelete(id)}
                  />
                  <Text>{name}</Text>
                  <Text>{number}</Text>
                </Box>
              </Box>
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