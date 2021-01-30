import styled from 'styled-components';

// interface IProps {
//     hovered?: 'white' | 'red' | 'none';
//     color?:string;
// }

// export const Button = styled.button<IProps>`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     min-width: 160px;
//     height: 50px;
//     border: ${(props) => (props.hovered === 'white'
//     ? '1px solid #020002'
//     : props.hovered === 'red'
//       ? '1px solid red'
//       : 'none')};
//     outline: none;
//     background-color: ${(props) => (props.hovered === 'white'
//     ? 'white'
//     : props.hovered === 'red'
//       ? 'white'
//       : '#161616')};
//     transition: 0.2s;
//     color: ${(props) => (props.hovered === 'white'
//     ? '#020002'
//     : props.hovered === 'red'
//       ? '#020002'
//       : '#faf8f8')};
//     &:hover {
//         background-color: ${(props) => (props.hovered === 'white'
//     ? '#161616'
//     : props.hovered === 'red'
//       ? 'crimson'
//       : '#faf8f8')};
//         border: 1px solid
//             ${(props) => (props.hovered === 'white'
//     ? 'black'
//     : props.hovered === 'red'
//       ? 'crimson'
//       : '#020002')};
//         color: ${(props) => (props.hovered === 'white'
//     ? 'white'
//     : props.hovered === 'red'
//       ? 'white'
//       : '#020002')};
//     }
// `;

interface IButtonProps {
  backgroundColor?:string | 'crimson' | 'white' | 'black';
  backgroundHover?:string | 'crimson' | 'white' | 'black';
  colorHover?:string | 'white' | '#161616'
  color?:string | 'white' | 'black'
  borderColor?:string;
  borderColorHover?:string;
}

export const Button = styled.button<IButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-width: 160px;
    height: 50px;
    transition:.4s;
    border:${(props) => (props.borderColor ? `1px solid ${props.borderColor}` : 'none')};
    outline:none;
    color:${(props) => props.color || 'white'};
    background-color: ${(props) => props.backgroundColor || 'black'};
    &:hover {
      color:${(props) => props.colorHover || 'black'};
      background-color:${(props) => props.backgroundHover || '#161616'};
      border:${(props) => (props.borderColorHover ? `1px solid ${props.borderColorHover}` : 'none')};
    }
`;
