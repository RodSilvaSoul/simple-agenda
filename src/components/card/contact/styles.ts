import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  checked: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: table;
  table-layout: fixed;

  width: 100%;
  height: 4rem;

  font-size: 0.875rem;
  font-weight: 500;

  transition: all 0.3s;

  border-radius: 0.7rem;

  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary : '#fff'};
  color: ${(props) =>
    props.checked ? props.theme.colors.secondary : 'inherit'};
  box-shadow: ${(props) => (props.checked ? props.theme.shadow.button : '')};

  .avatar {
    display: ${(props) => (props.checked ? 'none' : 'flex')};
  }

  &:hover,
  &:focus-within {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    box-shadow: ${(props) => props.theme.shadow.button};

    div:first-child {
      input {
        display: inline-block;
      }

      .avatar {
        display: none;
      }
    }
  }

  > div {
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 0 0.5rem;
  }

  > div:first-child {
    padding-left: 1rem;
  }

  > *:nth-child(2) {
    display: none;

    @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
      display: table-cell;
    }
  }

  > *:nth-child(3) {
    display: none;

    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
      display: table-cell;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  > a {
    margin-left: auto;
  }

  padding-right: 1rem !important;
`;

export const ViewContactLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  border-radius: 0.3rem;
  border: 0;

  background-color: ${(props) => props.theme.colors.secondary};

  transition: all 0.3s ease-in;

  svg {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #e2e8f0;
  }
`;

interface AvatarWrapperProps {
  isChecked: boolean;
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: flex;
  align-items: center;

  > span {
    margin-left: 1rem;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  input {
    display: ${(props) => (props.isChecked ? 'inline-block' : 'none')};
    margin-left: 0.8rem;
    margin-right: 0.78rem;
  }
`;
