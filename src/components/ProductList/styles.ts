import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 24px;
  width: 100%;
`;

export const Listagem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-top: 40px;
`;
