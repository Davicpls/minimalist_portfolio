import { Typography } from "@mui/material"

export const AboutEnglish = ({ myAge, textColor }) => {
    return (
        <Typography sx={{ textAlign: "justify", fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, boxSizing: "border-box", p: "1rem", letterSpacing: "0.10em" }}>
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
        <Typography sx={{ textAlign: "justify", fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, boxSizing: "border-box", p: "1rem", letterSpacing: "0.10em" }}>
            Olá, meu nome é Davi Coelho e tenho {myAge} anos.
            Iniciei a programação com Python em 2022.
            Cursando a graduação de Sistemas de Informação na Universidade PUC-MG..
            Conhecimentos sólidos em Python, Javascript, React.js, HTML, CSS e C#.
            Estagiei no BTG Pactual, trabalhando com tecnologias como
        </Typography>
    );
};

export const PythonCrudEnglish = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify"  }}>
            Python Crud - A stock management project with a backend in Python and FastAPI, where the user can
            insert items with their respective prices, add balance to the account, purchase, edit, and delete items, as well as view
            all of this in tables.
            {children}
        </Typography>
    )
}


export const PythonCrudPortuguese = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify"  }}>
            Python Crud - Um projeto de gerenciamento de estoque com backend em Python e FastAPI, onde o usuário pode
            inserir items com seus respectivos preços, adicionar saldo na conta, comprar, editar e deletar items, além de visualizar
            isso tudo em tabelas.
            {children}
        </Typography>
    )
}

export const ChromeTimerExtensionEnglish = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify"  }}>
            Customizable Focus Timer - a Google Chrome extension designed for those who crave flexibility in their focus sessions.
            Inspired by the Pomodoro Technique, the extension takes it a step further by allowing you to tailor your work and break durations to your unique needs.
            {children}
        </Typography>
    )
}


export const ChromeTimerExtensionPortuguese = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify"  }}>
            Temporizador de Foco Personalizável - uma extensão do Google Chrome projetada para quem deseja flexibilidade em suas sessões de foco.
            Inspirada na Técnica Pomodoro, ela permite que você ajuste as durações de trabalho, pausa e ciclos de acordo com suas necessidades únicas.
            {children}
        </Typography>
    )
}

export const MinimalistPortfolioPortuguese = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify" }}>
            Esta Página - Página Portfolio onde divulgo minhas habilidades e projetos pessoais.
            {children}
        </Typography>
    )
}

export const MinimalistPortfolioEnglish = ({ textColor, children }) => {
    return (
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: "1.2rem", color: textColor, p: "0.6rem", letterSpacing: "0.10em", 
        display: "flex", flexDirection: "column", textAlign: "justify"  }}>
            This Page - Portfolio page where I showcase my skills and personal projects.
            {children}
        </Typography>
    )
}