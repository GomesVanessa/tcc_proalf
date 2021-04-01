import Button from "./Button";

export default{
    title: "Proalf/Button",
    component: Button,
}

export const Button_ = () => {
    const exibealert = () => {
        alert('Teste')

    }
    return(
        <Button onClick={exibealert}>
            Continuar
        </Button>
    )
}              

