import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, DisheCard, LogoutButton } from './styles';

const dishes = [
  {
    id: 0,
    name: 'Dishe 1',
    image:
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg',
    description:
      'This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    id: 1,
    name: 'Dishe 2',
    image:
      'https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG',
    description:
      'This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried.',
  },
  {
    id: 2,
    name: 'Dishe 3',
    image:
      'https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R',
    description:
      'This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving.',
  },
  {
    id: 3,
    name: 'Dishe 4',
    image:
      'https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE',
    description:
      'Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey.',
  },
];

export default function Main() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <img src={logo} alt="Serasa" />
      {dishes.map(dishe => (
        <Link to="/main">
          <ul>
            <DisheCard key={dishe.id}>
              <div>
                <strong>{dishe.name}</strong>
                <img src={dishe.image} alt="Serasa" />
                <span>{dishe.description}</span>
              </div>
            </DisheCard>
          </ul>
        </Link>
      ))}
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </Container>
  );
}
