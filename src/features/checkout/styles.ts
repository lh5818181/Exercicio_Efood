import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  background-color: #fef2f2;
  min-height: 100vh;
`

export const Form = styled.form`
  background-color: #ef4444;
  color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 500px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.95rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  margin-top: 4px;
  color: #111827;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #ef4444;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 12px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #f3f4f6;
  }
`

export const Flex = styled.div`
  display: flex;
  gap: 12px;
`

export const ConfirmationContainer = styled.div`
  background-color: #ef4444;
  color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`

export const Text = styled.p`
  margin-bottom: 12px;
  line-height: 1.5;
`
