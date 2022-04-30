import {Container} from './styles';

interface TitleProps {
  title: string;
  type?: string;
}

export const Title = ({title, type}:TitleProps) => {
    return (
        <Container>
            {title}
        </Container>
    );
}