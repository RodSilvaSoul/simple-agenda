import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  height: 100vh;
  width: 100%;
`;


export const Main = styled.main`
  height: calc(100vh - 4.5rem);
  position: relative;
`;
