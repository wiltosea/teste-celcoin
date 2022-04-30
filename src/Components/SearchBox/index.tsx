import { Icon } from '@iconify/react';
import { SearchBox } from './styles';


export const Search = () => {
  return (
    <SearchBox>
      <Icon icon="ic-baseline-search" width={20}/>
      <input type="text" placeholder="Busca..." />
    </SearchBox>
  );
};