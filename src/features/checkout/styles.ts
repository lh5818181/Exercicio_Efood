import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const Form = styled.form`
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  width: 100%;
  box-sizing: border-box;

`

export const Title = styled.h2`
  margin-bottom: 16px;
  text-align: left;
`

export const Field = styled.div`
  margin-bottom: 8px;

    .fieldComplement {
  margin-bottom: 24px;}
`

export const Label = styled.label`
  font-family: Roboto;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
`

export const Input = styled.input`
  width: 100%;
  padding: 16px 8px;
  border: none;
  box-sizing: border-box;
  margin-top: 8px;
`

export const Row = styled.div`
  display: flex;

`

export const Button = styled.button<{ full?: boolean }>`
  width: ${({ full }) => (full ? '100%' : 'auto')};
  display: block;
  margin-bottom: 8px;
  padding: 8px 68px;
  background: ${Cores.bege};
  color: ${({ full }) => (full ? Cores.vermelhoClaro : Cores.bege)};
  text-align: center;
  border: ${({ full }) => (full ? 'none' : `1px solid ${Cores.bege}`)};
  cursor: pointer;
  font-family: Roboto;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`

export const ConfirmationContainer = styled.div`
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  padding: 1.5rem;
  text-align: center;
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;
  margin-bottom: 1rem;
  color: ${Cores.bege};
  text-align: justify;
`


export const Error = styled.div`
  color: #ffdddd;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`