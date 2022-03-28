import { StyledHeader } from "../../../styles/donation/Header.styles";
import HeaderLinks from "./HeaderLinks";
import DonationLogo from './Logo';
import { Container, Button } from "@material-ui/core";


export default function DonationHeader() {
    return (
        <StyledHeader>
            <HeaderLinks />

            <Container maxWidth='xl' className='donation-header-main-bar'>
                <DonationLogo />

                <nav>
                    <ul>
                        <li>
                            <a href='#'>
                                Home
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Doação
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Plataformas
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Contato
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Serviços
                            </a>
                        </li>
                    </ul>

                    <div className='login-or-signin'>
                        <Button
                            className='login-button'
                            variant='text'
                            endIcon={<img src='/donation_images/arrow_down.png' />}
                            sx={{color: '#5c5b5b'}}
                        >
                            Login
                        </Button>

                        <Button
                            className='variant-contained'
                            variant='contained'
                            color='secondary'
                        >
                            Seja um doador
                        </Button>
                    </div>
                </nav>
            </Container>
        </StyledHeader>
    )
}