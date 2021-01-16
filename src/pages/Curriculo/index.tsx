import Head from 'next/head';
import React from 'react';
import { Container } from '../../styles/pages/Curriculo/style';

const Curriculo: React.FC = () => {
  return (
    <Container className="page">
      <Head>
        <title>Currículo | Felipe de Abreu Ferrarini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>CURRÍCULO</h3>
          <div id="bar" />
        </div>

        <h1>VEJA MEU CURRÍCULO</h1>

        <div id="experiencias">
          <div id="educacao">
            <h3>Educação</h3>
            <ul>
              <li className="listMain">
                <span id="curso">ENGENHARIA DE COMPUTAÇÃO</span>
                <span id="periodo">2016 - Atualmente</span>
                <span id="local">Faculdade UCL</span>
              </li>
              <li className="listMain">
                <span id="curso">TÉCNICO EM ELETROTÉCNICA</span>
                <span id="periodo">2020 - Atualmente</span>
                <span id="local">CEDTEC - Serra</span>
              </li>
              <li className="listMain">
                <span id="curso">ENSINO MÉDIO</span>
                <span id="periodo">2013 - 2015</span>
                <span id="local">EFA-O Anchieta</span>
              </li>
            </ul>
          </div>
          <div id="profissional">
            <h3>Experiência Profissional</h3>
            <ul>
              <li className="listMain">
                <span id="curso">ESTÁGIARIO DE ENGENHARIA</span>
                <span id="periodo">2019 - Atualmente</span>
                <span id="local">VALE S/A</span>
                <ul>
                  <li>
                    Automatização de processos (Microssoft Flow + PowerApps +
                    SharePoint)
                  </li>
                  <li>
                    Criação de robôs para modificações em massa no sistema da
                    empresa (SAP + HP LoadHunner)
                  </li>
                  <li>
                    Acompanhamento de indicadores de manutenção e operação
                  </li>
                  <li>Análise de falhas de equipamentos</li>
                  <li>Programação de manutenção</li>
                </ul>
              </li>
              <li className="listMain">
                <span id="curso">AUXILIAR ADMINISTRATIVO</span>
                <span id="periodo">2016 - 2019</span>
                <span id="local">R.P.F. Auto Peças</span>
                <ul>
                  <li>Contas a receber</li>
                  <li>Faturamento</li>
                  <li>Controle de garantia</li>
                  <li>Atendimento ao cliente</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Curriculo;
