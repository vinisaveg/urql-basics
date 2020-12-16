import styled from 'styled-components';

export const FormField = styled.form`
  width: 80%;
  max-width: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #222222;
  text-align: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin: 7px;
  background-color: #fafafa;
  border: 1px solid #6875e5;
  padding: 8px 14px;
  outline-color: #6875e5;
`;

export const FinishButton = styled.button`
  width: 100%;
  margin-top: 12px;
  background-color: #6875e5;
  color: #ffffff;
  padding: 8px 14px;
  border: none;
  outline: none;
  transition: 150ms ease;
  cursor: pointer;

  &&:hover {
    opacity: 0.8;
  }
`;
