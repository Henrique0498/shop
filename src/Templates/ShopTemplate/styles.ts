import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Body = styled.div`
  width: calc(100% - 124px);
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  & > p {
    margin-right: 10px;
  }

  & > div {
    position: relative;
    padding: 6px 0;

    :hover ul,
    :focus ul,
    :focus-within ul {
      display: block;
    }
  }

  & > * > button {
    min-width: 130px;
    background-color: ${({ theme }) => theme.colors.yellow[200]};
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
  }

  ul {
    position: absolute;
    background: ${({ theme }) => theme.colors.yellow[100]};
    width: 100%;
    border-radius: 10px;
    padding: 8px 0;
    top: 40px;
    z-index: 50;
    display: none;
  }

  ul li {
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 8px;

    :hover {
      background: rgb(00, 0, 0, 0.1);
    }
  }
`
