import { Link } from 'react-router-dom';
import {ItemMenuLi} from './styles'

interface ItemMenuProps {
  title: string;
  url: string;
  icon: string;
  className?: string;
}

export const ItemMenu = ({className, icon, title, url}:ItemMenuProps) => {
  return (
    <ItemMenuLi>
      <i className={icon} />
      <Link to={url} className={className}>{title}</Link>
    </ItemMenuLi>
  );
};