import styled from 'styled-components';
import { LayoutColors, LayoutFonts } from '@src/components/core/commom';


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 16px;
    width: 100%;
    margin: auto;
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.silver};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.h1`
    font: ${LayoutFonts.fontTitle};
    margin-bottom: 24px;
`;

export const Label = styled.label`
    margin-bottom: 8px;
    font: ${LayoutFonts.fontContent};
`;


export const Input = styled.input`
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.gray};
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 16px;
`;

export const ButtonForm = styled.button`
    display: flex;
    align-self: flex-end;
    width: fit-content;
    background-color: ${LayoutColors.primary};
    border-radius: 8px;
    font: ${LayoutFonts.fontButton};
    color: ${LayoutColors.white};
    padding: 8px 30px;
`;