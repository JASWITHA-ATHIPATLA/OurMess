import React from 'react'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
  width:100%;
  height:100%;
`

const MainContent = () => {
  return (<Container>
    <Outlet/>
  </Container>
  )
}

export default MainContent;