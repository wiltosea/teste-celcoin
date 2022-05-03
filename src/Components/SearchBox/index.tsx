import { Icon } from '@iconify/react';
import { SearchBox } from './styles';

interface SearchProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Search = ({value, onChange}:SearchProps) => {
  return (
    <SearchBox>
      <Icon icon="ic-baseline-search" width={20}/>
      <input type="search" placeholder="Busca..." value={value} onChange={onChange}/>
    </SearchBox>
  );
};