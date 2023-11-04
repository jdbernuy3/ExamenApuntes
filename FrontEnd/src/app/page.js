'use client'

//import axios from 'axios'

import {useState} from 'react'

import styles from './page.module.css'
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Matricula from './components/Matricula/matricula.jsx';

export default function Home() {

 

  return (
    <main className={styles.main}>
        <>
          <Matricula></Matricula>
        </>

    </main>
  )
}
