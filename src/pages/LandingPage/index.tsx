import { Flex, Image } from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import palette from '../../palette.ts';

const LandingPage = () => {
    return (
        <>
            <Flex
                direction="column"
                gap="40px"
                pb={75}
                borderBottomRadius="30px"
                bgGradient={`linear(to-t, ${palette.blue} 0.1%, ${palette.darkNostalgiaSkyBlue} 51.5%, ${palette.forrestLagoon} 100.2%)`}
            >
                <Navbar />
                <Flex
                    alignItems="center"
                    width="75%"
                    height="400px"
                    alignSelf="center"
                    borderRadius="30px"
                    bgColor={palette.white}
                >
                    <Flex
                        direction="column"
                        justifyContent="center"
                        paddingX="40px"
                        borderRadius="30px"
                        maxWidth="35%"
                        height="inherit"
                        bgColor={palette.paleMorningBlueSky}
                        boxShadow="10px 0 10px -5px rgba(0, 0, 0, 0.5)"
                    >
                        <h2>Fitsphere</h2>
                        <h4>Get Fit, Stay Fit</h4>
                        <p style={{ textAlign: 'justify' }}>
                            We're more than just a place to break a sweat. We're
                            more than just a place to break a sweat. We're your
                            fitness sanctuary and your second home, whether
                            you're an athlete or just a beginner. We've got
                            something for everyone.
                        </p>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="end"
                        flexGrow={1}
                        height="inherit"
                    >
                        <Image
                            src="src/assets/img/white-woman-workout.png"
                            alt="fitness-class-banner"
                            filter="drop-shadow(5px 0 5px rgba(0,0,0,0.4))"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default LandingPage;
