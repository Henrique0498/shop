import styled, { css } from 'styled-components'

interface ImageStylesProps {
  color: string
}

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  padding: 8px 0 16px;

  ::after {
    content: '';
    min-width: 300px;
    width: 100%;
    min-height: 300px;
    height: 100%;
    position: absolute;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.orange[200]} 0%,
      transparent 60%
    );
  }

  * {
    z-index: 2;
  }
`
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50px;

  button,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    padding: 4px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`

export const Body = styled('div')<ImageStylesProps>`
  ${({ color }) => css`
    width: 80%;
    height: 140px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    .icon {
      position: absolute;
      top: 0;
      width: 80%;
      height: 60px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      border-radius: 14px;

      ::after {
        content: '';
        width: 80px;
        height: 80px;
        position: absolute;
        top: -5px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.yellow[300]};
        box-shadow: 0 0 0 2px #fff, 0 0 0 100px ${color};
      }
      z-index: 1;
    }

    .image {
      width: 140px;
      height: 140px;
      margin-top: -16px;
      margin-left: -32px;
      position: relative;
      transform: rotate(-35deg);
      z-index: 2;

      ::before {
        content: '';
        width: 90px;
        position: absolute;
        top: 80%;
        left: 10%;
        border-radius: 50%;
        box-shadow: 0 0 20px 6px ${color};
      }
    }
  `}
`

export const Footer = styled.div`
  text-transform: capitalize;
  flex-direction: column;
`
