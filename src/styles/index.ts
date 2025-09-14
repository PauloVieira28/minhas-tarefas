import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const StyledGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 14px;
  cursor: pointer;
  background-color: ${variables.blueDark};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSalve = styled(Button)`
  background-color: ${variables.green};
`

export default StyledGlobal
