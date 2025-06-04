import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 112px;
  width: 100%;
`;

export const Listagem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px ;
  justify-content: center;
  margin-top: 80px;
`;
