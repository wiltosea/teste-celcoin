import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';
import {ItemMenuLi} from './styles'

interface ItemMenuProps {
  title: string;
  url: string;
  icon: string;
  className?: string;
}

export const ItemMenu = ({className, icon, title, url}:ItemMenuProps) => {
  return (
    <ItemMenuLi to={url} className={className}>
      <li>
        <Icon icon={icon} width={18}/><span>{title}</span>
      </li>
    </ItemMenuLi>
  );
};