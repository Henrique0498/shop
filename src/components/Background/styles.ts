import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;

  .icon {
    width: calc(100% - 64px);
    max-width: 1000px;
    height: 300px;
    position: absolute;
    top: 80px;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    overflow: hidden;

    ::after {
      content: '';
      width: 150px;
      height: 150px;
      position: absolute;
      top: -75px;
      opacity: 0.7;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.amber[500]} 40%,
        rgba(255, 255, 255) 100%
      );
      border-radius: 50%;
      filter: blur(3px);

      box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.amber[500]},
        0 0 0 40px
          ${({ theme }) => transparentize(0.1, theme.colors.amber[400])},
        0 0 0 120px ${({ theme }) => theme.colors.yellow[400]},
        0 0 0 200px
          ${({ theme }) => transparentize(0.1, theme.colors.amber[400])},
        -50px 0px 10px 280px ${({ theme }) => theme.colors.yellow[400]},
        -50px 0 30px 380px ${({ theme }) => transparentize(0.1, theme.colors.amber[400])};
    }
  }
`
