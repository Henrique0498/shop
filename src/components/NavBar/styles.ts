import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  padding: 0 32px;
  display: flex;
  justify-content: center;

  & > div {
    width: calc(100% - 64px);
    max-width: 1000px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
