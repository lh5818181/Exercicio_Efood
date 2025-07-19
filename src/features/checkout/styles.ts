// src/features/checkout/styles.ts
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
  border-bottom: 1px solid ${Cores.bege};
  padding-bottom: 0.5rem;
`

export const Field = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.25rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  box-sizing: border-box;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Button = styled.button<{ full?: boolean }>`
  width: ${({ full }) => (full ? '100%' : 'auto')};
  display: block;
  margin: ${({ full }) => (full ? '1rem 0' : '0.5rem 0')};
  padding: 0.75rem;
  background: ${({ full }) => (full ? Cores.bege : 'transparent')};
  color: ${({ full }) => (full ? Cores.vermelhoClaro : Cores.bege)};
  text-align: center;
  border: ${({ full }) => (full ? 'none' : `1px solid ${Cores.bege}`)};
  border-radius: 4px;
  cursor: pointer;
`

export const ConfirmationContainer = styled.div`
  background: ${Cores.vermelhoClaro};
  color: ${Cores.bege};
  padding: 1.5rem;
  text-align: center;
`

export const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`
