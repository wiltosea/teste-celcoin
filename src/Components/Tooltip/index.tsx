import StyledTippy from './styles';


export const Tooltip = ({children}:any, {...props}:any) => {
  return (
    <StyledTippy {...props}>
      {children}
    </StyledTippy>
  );
};