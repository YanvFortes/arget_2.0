import styled from "styled-components"
import  { useForm } from "react-hook-form"

const FormStyled = styled.form`
    padding: 1em;

    @media (max-width: 426px) {
        max-width: 100vw;
        padding: 0;
    }
`
const Fieldset = styled.fieldset`
    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 8px #000000b2;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    max-width: 70vw;

    @media (max-width: 1024px) {
        max-width: 75vw;
    }

    @media (max-width: 426px) {
        align-items: center;
        box-sizing: border-box;
        max-width: 100vw;
        gap: 0;
        padding: 0;
        border-radius: 0;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.$direction ? props.$direction : 'column'};
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 1024px) {
        justify-content: center;
        gap: .5em;
        flex-direction: ${props => props.$direction ? props.$direction : 'column'};
    }
    
    @media (max-width: 426px) {
        align-items: center;
        flex-direction: column;
    }
`
const Title = styled.h1`
    color: #2d709e;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 1.5px #0000004c;
    
    @media (max-width: 426px) {
        font-size: 2rem;
        padding: 1em 0 0 0;
    }
`
const Description = styled.p`
    color: #2d709e;
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-shadow: 1px 1px #0000004c;
    padding: 1em 0;
    
    @media (max-width: 426px) {
        box-sizing: border-box;
        font-size: 1rem;
        text-align: center;
        padding: 1em;
    }
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    height: 70px;

    @media (max-width: 426px) {
        width: 90vw;
    }
`
const Input = styled.input`
    background-color: #e6e6e6;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 0.75em;
    width: 33vw;

    @media (max-width: 1024px) {
        width: 34vw;
    }

    @media (max-width: 768px) {
        width: 70vw;
    }

    @media (max-width: 426px) {
        width: 90%;
    }
`
const Erro = styled.span`
    font-size: .9rem;
    color: #d51e17;

    @media (max-width: 768px) {
        font-size: .8rem;
        text-align: center;
    }
`
const TextArea = styled.textarea`
    background-color: #e6e6e6;
    border: 1px solid #0000004c;
    border-radius: 8px;
    height: 180px;
    padding: .5em;
    width: auto;

    @media (max-width: 1024px) {
        margin: 0 .75em;
    }

    @media (max-width: 426px) {
        height: 120px;
        width: 85vw;
        margin-bottom: .5em;
    }
`
const Submit = styled.button`
    background-color: #2d709e;
    border: none;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;
    padding: 0.75em;
    text-transform: uppercase;
    transition: .7s ease;
    width: 20%;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 426px) {
        width: 80%;
        margin: 1em;
    } 


`

const Form = () => {

    const { 
        register, 
        handleSubmit,
        formState: { errors }, 
        trigger 
    } = useForm()

    console.log(errors)

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
                <Container>
                    <Title> Entre em contato conosco </Title>
                    <Description>
                        Quer solicitar um orçamento ou tem alguma dúvida sobre nossos serviços, 
                        pode nos enviar uma mensagem pelo formulário abaixo, que responderemos em breve.
                    </Description>
                </Container>
                <Container $direction="row">
                    <Field>
                        <Input 
                            type="text"
                            placeholder="Nome"
                            {...register("nome",{
                                required: `É obrigatório preencher o campo Nome!`,
                                minLength: {
                                    value: 3,
                                    message: "O nome inserido não contem os caracteres minimos exigidos!"
                                },
                            })}
                            onBlur={() => {
                                trigger("nome");
                            }}
                        />
                        {errors.nome && <Erro>{errors.nome.message}</Erro>}
                    </Field>
                    <Field>
                        <Input 
                            type="email" 
                            placeholder="E-mail"
                            {...register("email",{
                                required: `É obrigatório preencher o campo E-mail!`,
                                minLength: {
                                    value: 7,
                                    message: "O e-mail inserido não contem os caracteres minimos exigidos!"
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Digite um endereço de e-mail válido!'
                                }
                            })}
                            onBlur={() => {
                                trigger("email");
                            }}                       
                        />
                        {errors.email && <Erro>{errors.email.message}</Erro>}
                    </Field>
                    <Field>
                        <Input 
                            type="text" 
                            placeholder="Telefone"
                            {...register("telefone",{
                                required: `É obrigatório preencher o campo Telefone!`,
                                pattern: {
                                    value: /^\(\d{2}\)\s\d{5}-\d{4}$/,
                                    message: 'Preencher um número válido - EX: (51) 98765-4321'
                                }
                            })}
                            onBlur={() => {
                                trigger("telefone");
                            }}
                        />
                        {errors.telefone && <Erro>{errors.telefone.message}</Erro>}
                    </Field>
                    <Field>
                        <Input 
                            type="text" 
                            placeholder="Assunto"
                            {...register("assunto",{
                                required: `É obrigatório preencher o campo Assunto!`
                            })}
                            onBlur={() => {
                                trigger("assunto");
                            }}
                        />
                        {errors.assunto && <Erro>{errors.assunto.message}</Erro>}
                    </Field>
                </Container>
                <TextArea 
                    placeholder="Escreva sua mensagem aqui..."
                    {...register("mensagem",
                    {required: `É obrigatório preencher o campo Mensagem!`}
                    )}
                    onBlur={() => {
                        trigger("mensagem");
                    }}
                />
                {errors.mensagem && <Erro>{errors.mensagem.message}</Erro>}
                <Submit>
                    Enviar
                </Submit>
            </Fieldset>
        </FormStyled>
    )
}

export default Form