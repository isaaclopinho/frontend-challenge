import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challenge"
        />
        <div className={styles.wrapper}>
          <h1 className={styles.margin}>Olá e seja bem vindo ;)</h1>
          <p>Esse é o portal de busca iniciante</p>
          <p>É iniciante porque ele não sabe muita coisa rs</p>
          <p>
            Clique em Busca no menu de navegação para testar as funcionalidades.
          </p>
          <p>Para executar os testes unitários: npm test.</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
