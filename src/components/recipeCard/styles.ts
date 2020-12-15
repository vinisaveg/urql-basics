import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding: 10px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #6875e5;
  color: #ffffff;
`;

export const TextWrapper = styled.div`
  height: 100%;
  margin: 0px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
`;

export const TextLabel = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin: 2px 10px;
  color: #a6adef;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;

export const Description = styled(Title)`
  font-size: 16px;
  font-weight: 400;
`;

export const Ingredient = styled(Description)`
  margin: 5px 10px;
  padding: 5px;
  background-color: #7b85e2;
`;

export const ActionsWrapper = styled(TextWrapper)`
  margin: 0;
`;

export const UpdateButton = styled.button`
  font-size: 16px;
  margin: 5px 10px;
  padding: 5px;
  background-color: #5dee9f;
  transition: 150ms ease;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;

  &&:hover {
    opacity: 0.8;
  }
`;

export const DeleteButton = styled(UpdateButton)`
  background-color: #ee5d5d;
  transition: 150ms ease;
`;
