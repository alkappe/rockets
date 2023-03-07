import React from 'react'
import styled from 'styled-components'


const Paper = styled.div`
    max-width: 900px;
`

export const Layout = ( children: any) => {
  return (
    <Paper>{children}</Paper>
  )
}
