import styled from '@emotion/styled'

export const QuestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;
export const QuestionsList = styled.ul`
    margin-top: 15px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const QuestionsListItem = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 10px;
    &:not(:last-child) {
        border-bottom: 1px solid black;
        border-color: rgb(0, 0, 0, 0.3);
    }
`;
export const QuestionText = styled.p`
    width: 80%;
    text-align: start;
`;