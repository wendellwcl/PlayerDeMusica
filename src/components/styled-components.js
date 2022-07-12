import styled from "styled-components";

export const SwitchCheckbox = styled.label`
    display: flex;
    align-items: center;

    .switch-text{
        font-size: 0.9rem;
        color: var(--high-pure);
    }

    .switch-checkbox{
        width: 0;
        height: 0;
        opacity: 0;
    }

    .switch-checkbox:focus + .switch-darkmode{
        box-shadow: 0 0 3px var(--high-pure);
    }

    .switch-darkmode{
        display: inline-block;
        height: 20px;
        width: 40px;
        border: 1px solid var(--high-pure);
        border-radius: 12px;
        margin-left: 0.25rem;
        position: relative;
    }

    .switch-darkmode::before{
        content: '';
        position: absolute;
        left: 2px;
        top: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: var(--high-pure);
        transition: .3s;
    }

    .switch-checkbox:checked + .switch-darkmode::before{
        left: 22px;
    }
`