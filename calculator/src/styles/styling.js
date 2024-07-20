import styled from 'styled-components'

export const Container=styled.div`
display:grid;
justify-content:center;
align-content:center;
margin:40px auto;
min-height:500px;
width:400px;
grid-template-columns:repeat(4,1fr);
grid-template-rows:minmax(120px,auto) repeat(5,1fr);
box-shadow:2px 2px 10px #333;
border-radius:10px
`;

export const Screen=styled.div`
grid-column:1/-1;
background-color:rgb(115, 147, 179);
padding:17px;
word-wrap:break-word;
break-word:break-all;
text-align:right;
border-top-left-radius:10px;
border-top-right-radius:10px;
`

export const Previous=styled.div`
color:black;
font-size:1.5rem;
`

export const Current=styled.div`
color:white;
font-size:2.5rem;
`

export const Button=styled.div`
text-align:center;
font-size:2rem;
background-color:rgb(240, 240, 240);
&:hover{
background-color:rgb(180, 180, 180);
}
cursor:pointer;
outline:none;
border:1px outset white;
${function({gridSpan}){
    if(gridSpan){
        return `grid-column:span ${gridSpan}`;
    }
}};
${({operation})=> operation && "background-color:#6699CC;"}
${({deleteBtn})=> deleteBtn && "background-color:#6495ED;"}
${({del})=> del && "background-color:red;"}
${({equals})=> equals && "background-color:#6699CC; border-bottom-right-radius:10px;"}
${({decimal})=> decimal && "border-bottom-left-radius:10px;"}
`