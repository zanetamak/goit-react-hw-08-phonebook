import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

// Hook ten pozwala nam w łatwy sposób dostać się do wszystkich informacji o użytkowniku.
// Będziemy go wykorzystywać w kilku miejscach aplikacji.Jego głównym zadaniem jest agregacja selektorów w jednym miejscu.