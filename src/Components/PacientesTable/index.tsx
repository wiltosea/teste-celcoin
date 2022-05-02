import {Container, TdActions, TdCardPaciente, TdTestes} from './styles'
import { Icon } from '@iconify/react';
import Button from '../Button';
import { SubTitle } from '../Cards/styles';

interface dataProps {
  key: number,
  nome: string,
  exame?: string,
  diagnostico?: string,
  testesRealizados?: number,
  testesCancelados?: number,
  testePendentes?: number,
  foto?: string,
}


const data = [
  {
    key: 1,
    nome: 'Renata Augusto Ferreira',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 3,
    testesCancelados: 1,
    testePendentes: 1,
    foto: "./images/foto-renata.png"
  },
  {
    key: 2,
    nome: 'Leandro Motta Braga',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 3,
    testesCancelados: 0,
    testePendentes: 50,
    foto: "./images/foto-renata.png"
  },
  {
    key: 3,
    nome: 'Kuromi Naori Kagasawa',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 3,
    testesCancelados: 0,
    testePendentes: 12,
    foto: "./images/foto-renata.png"
  },
  {
    key: 4,
    nome: 'Carlos Nobrega Baccio',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 7,
    testesCancelados: 2,
    testePendentes: 11,
    foto: "./images/foto-renata.png"
  },
  {
    key: 5,
    nome: 'Suelton A. Mellis',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 33,
    testesCancelados: 1,
    testePendentes: 27,
    foto: "./images/foto-renata.png"
  },

];

export const PacientesTable = () => {

return (
  <Container>
    <table>
      <tbody>
        {data.map(({key, nome, foto, diagnostico, testesRealizados, testesCancelados, testePendentes}: dataProps) => {
          return (
            <tr key={key}>
              <TdCardPaciente>
                <div className="td-card-paciente-info">
                  <img src={foto} alt="foto"/>
                  <div className="td-card-info-details">
                    <p className="nome-paciente">{nome}</p>
                    <SubTitle>Diagnóstico</SubTitle>
                    <p className="diagnostico">{diagnostico}</p>
                  </div>
                </div>
              </TdCardPaciente>
              <TdTestes className='green'>
                <p>{testesRealizados}</p>
                <span>Testes realizados</span>
              </TdTestes>
              <TdTestes className='red'>
                <p>{testesCancelados}</p>
                <span>Testes cancelados</span>
              </TdTestes>
              <TdTestes className='orange'>
                <p>{testePendentes}</p>
                <span>Testes pendentes</span>
              </TdTestes>
              <TdActions>
                <Icon icon="ant-design:edit-filled" width={16} />
                <Button href='/' textTitle='ENVIAR NOVO TESTE' />
                <Button href='/' typeButton="primary" textTitle='ALTERAR CADASTRO' />
              </TdActions>
            </tr>);
        })}
      </tbody>
    </table>
  </Container>
  );
}