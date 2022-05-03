import { useEffect, useState } from 'react';
import {Container, TdActions, TdCardPaciente, TdTestes} from './styles'
import { Icon } from '@iconify/react';
import Button from '../Button';
import { SubTitle } from '../Cards/styles';
import axios from 'axios'
import { Typography} from 'antd'
import { Search } from '../SearchBox/';

const {Title} = Typography;
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

const dataSource = [
  {
    key: 1,
    nome: 'Augusto Ferreira',
    diagnostico: 'TDAH CAB ADHD, Autismo',
    testesRealizados: 3,
    testesCancelados: 1,
    testePendentes: 1,
    foto: "./images/foto-renata.png"
  }

]

export const PacientesTable = () => {

  const [data, setData] = useState<dataProps[]>(dataSource)
  const [q, setQ] = useState("")

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pacientes?q=${q}`)
      setData(response.data)
    } catch (error) {
      console.log(error);
    } 
  }
  
  useEffect(() => {
    getData()
  }, [q])

return (
  <Container>
    <div className="headerContainer">
      <div className="title"><Title level={5}>Lista de Pacientes ({data.length})</Title><Search onChange={e => setQ(e.target.value)}/></div>
      <Icon icon="carbon:overflow-menu-horizontal" width={45} />
    </div>
    <div className='scrollable-table'>
      <table>
        <tbody>
          {data.map(({key, nome, foto, diagnostico, testesRealizados, testesCancelados, testePendentes}: dataProps) => {
            return (
              <tr key={Math.random()}>
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
                  <span><Icon icon="ant-design:edit-filled" width={16} />
                  <Button href='/' textTitle='ENVIAR NOVO TESTE' /></span>
                  <Button href='/' typeButton="primary" textTitle='ALTERAR CADASTRO' />
                </TdActions>
              </tr>);
          })}
        </tbody>
      </table>
    </div>
  </Container>
  );
}