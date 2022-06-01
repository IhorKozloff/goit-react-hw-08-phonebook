import styled from '@emotion/styled'

export const EntriesButton = styled.button`
    background: linear-gradient(91.63deg, #FFB931 0.35%, #EAA318 99.45%);
    border: none;
    border-radius: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    text-align: center;
    color: #FFF;
    padding: 15px 0;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
`;
export const RedirectButton = styled.button
    `
        width: 400px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 23px;
        align-items: center;
        text-align: center;
        color: #FFF;
        background: rgb(255, 211, 170);
        border-radius: 10px;
        border: none;
        padding: 15px 0;
        opacity: 0.5;
        cursor: pointer;
        &:hover {
            opacity: 1;
        };
        &:active {
            transform: scale(0.95);
        };
    `;


