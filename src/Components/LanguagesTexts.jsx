import { Typography } from "@mui/material"

export const AboutEnglish = ({ myAge, textColor }) => {
    return (
        <Typography sx={{ textAlign: "justify", fontFamily: 'JetBrains Mono, monospace', fontSize: "1.1rem", color: textColor, boxSizing: "border-box" }}>
            My name is Davi Coelho and I am {myAge} years old.
            Started programming with Python in 2022.
            Pursuing Information Systems degree at PUC-MG University.
            Knowledgeable in Python, Javascript, HTML, CSS, React.js, and C#.
            Interned at BTG Pactual, where I worked with technologies such as:
        </Typography>
    );
};

export const AboutPortuguese = ({ myAge, textColor }) => {
    return (
        <Typography sx={{ textAlign: "justify", fontFamily: 'JetBrains Mono, monospace', fontSize: "1.1rem", color: textColor, boxSizing: "border-box" }}>
            Olá, meu nome é Davi Coelho e tenho {myAge} anos.
            Iniciei a programação com Python em 2022.
            Cursando a graduação de Sistemas de Informação na Universidade PUC-MG..
            Conhecimentos sólidos em, Python, Javascript, React.js, HTML, CSS e C#.
            Estagiei no BTG Pactual, trabalhando com tecnologias como
        </Typography>
    );
};

export const PythonCrudEnglish = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor }}>
            Currently i'm doing a stock management 'CRUD' with Python and FastAPI for backend, frontend with
            React.js and for database, i'm using PostgreSQL.
            {children}
        </Typography>
    )
}


export const PythonCrudPortuguese = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor }}>
            Atualmente, estou desenvolvendo um 'CRUD' para gestão de estoque com Python e FastAPI para o backend,
            React.js para o frontend e, para o banco de dados, estou usando PostgreSQL.
            {children}
        </Typography>
    )
}