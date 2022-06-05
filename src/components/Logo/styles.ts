import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  .icon {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    padding: 8px;

    ::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 3px;
      background: ${({ theme }) => theme.colors.gray[300]};
      border-radius: 50%;

      box-shadow: 8px 0px ${({ theme }) => theme.colors.gray[700]},
        0px 8px ${({ theme }) => theme.colors.gray[700]},
        8px 8px ${({ theme }) => theme.colors.gray[700]};
    }
  }
`
