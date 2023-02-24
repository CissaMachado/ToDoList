import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 0 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  .form-task {
    width: 100%;
    padding: 0;
  }
  .create-new-task {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .create-new-task input {
    width: 40%;
    height: 2.5rem;
    background-color: #e1e1e6;

    border: 1px solid #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 0 0 0;
    outline: 0;
    padding: 1rem 0.5rem 1rem;
  }
  .create-new-task button {
    width: 5rem;
    height: 2.5rem;

    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--white);
    background-color: #5e60ce;

    border-radius: 8px;
    border: none;

    margin-left: 0.5rem;
  }

  .to-do-task {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
  }

  .to-do-task textarea {
    width: 48%;
    height: 4rem;
    padding: 0 1rem;
    resize: none;
    box-shadow: 0 0 0 0;
    outline: 0;

    background: var(--gray-500);

    border: 1px solid var(--gray-500);
    border-radius: 8px;
  }
`;
