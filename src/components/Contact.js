import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import emailjs, {init} from 'emailjs-com';



export default function Contact() {
    const [getNameError, setNameError] = useState(false);
    const [getEmailError, setEmailError] = useState(false);
    const [getSubjectError, setSubjectError] = useState(false);
    const [getMessageError, setMessageError] = useState(false);
    const [getPopoverMessage, setPopoverMessage] = useState(false);
    const [getMessageSended, setMessageSended] = useState(false);
    const [open, setOpen] = useState(false);
    const [getButtonState, setButtonState] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const validations = text => {
        let id = text.target.id;
        text = text.target.value;
        let stringPattern = /^[a-zA-ZáéíóúÁÉÍÓÚ ]{2,30}$/;
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let specialCharacters = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9!@#$% ^&*)(+=._-]{2,}$/g;
        if (id === "name") {
            !stringPattern.test(text) ? setNameError(true) : setNameError(false);
        } else if (id === "email") {
            !emailPattern.test(text) ? setEmailError(true) : setEmailError(false);
        } else if (id === "subject") {
            !specialCharacters.test(text) ? setSubjectError(true) : setSubjectError(false);
        } else if (id === "message") {
            (text.trim() === "" || text.trim().length < 10) ? setMessageError(true) : setMessageError(false);
        }

    }

    const sendEmail = e => {
        e.preventDefault();
        if (!(getNameError || getEmailError || getSubjectError || getMessageError)) {
            setButtonState(true);
            const SERVICE_ID = "service_s5gozd6";
            const TEMPLATE_ID = "template_j8e13ge";
            const USER_ID = "user_QEM3fk6mtzpB3YMFBOY41";
            init(USER_ID);
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result) => {
                    if (result.status === 200) {
                        setMessageSended(true);
                        setPopoverMessage("Mensaje enviado exitosamente");
                        handleClick();
                        document.getElementById("contact-form").reset();
                        setButtonState(false);
                    } else {
                        setMessageSended(false);
                        setPopoverMessage("No se pudo enviar tu mensaje, intenta de nuevo");
                        handleClick();
                        setButtonState(false);
                    }
                }, (error) => {
                    setMessageSended(false);
                    setPopoverMessage("Ocurrió un error, intenta de nuevo");
                    handleClick();
                    setButtonState(false);
                });
        } else {
            setMessageSended(false);
            setPopoverMessage("Revisa de nuevo los campos");
            handleClick();
            setButtonState(false);
        }

    }


    return (
        <Container fixed>
            <Typography style={{marginBottom: 30, marginTop: 70}} variant='h2'>
                Contacto
            </Typography>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert elevation={6} variant="filled" onClose={handleClose}
                       severity={getMessageSended ? 'success' : 'error'}>
                    {getPopoverMessage}
                </Alert>
            </Snackbar>
            <Paper className={useStyles().paper} elevation={5}>
                <form id='contact-form' onSubmit={sendEmail}>
                    <Grid container spacing={5}>

                        <Grid item xs={12} lg={6}>
                            <TextField error={getNameError} name="name" onChange={validations} required
                                       className={useStyles().inputStyle} id="name"
                                       label={!getNameError ? "Nombre" : "Nombre no valido"} variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField error={getEmailError} name="email" onChange={validations} required
                                       className={useStyles().inputStyle} id="email"
                                       label={!getEmailError ? "Email" : "Email invalido"} variant="outlined"/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField name="subject" onChange={validations} error={getSubjectError}
                                       label={!getSubjectError ? "Asunto" : "Asunto no valido"} required
                                       className={useStyles().inputStyle}
                                       id="subject" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="message" required multiline rows={5}
                                       className={useStyles().inputStyle} onChange={validations} id="message"
                                       label={!getMessageError ? "Mensaje" : "Mensaje no valido"}
                                       error={getMessageError}
                                       variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" disabled={getButtonState} variant="contained" size="large" color="primary"
                                    className={useStyles().inputStyle}>
                                Enviar mensaje
                            </Button>

                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

const useStyles = makeStyles((themes) => ({
    inputStyle: {
        width: '100%',
    },

    paper: {
        padding: 40
    },

}));
