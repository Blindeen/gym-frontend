import Navbar from '../../components/Navbar';

const LandingPage = () => {
    const linkItems = [
        'Home',
        'Activities',
        'Trainers',
        'Contact',
        'Sign up',
        'Sign in',
    ];

    return (
        <>
            <div className="flex flex-col items-center gap-[40px] rounded-b-large pb-[75px] bg-gradient-to-t from-blue from-0.1% via-darkNostalgiaSkyBlue via-51.5% to-forrestLagoon to-100.2%">
                <Navbar items={linkItems} />
                <div className="flex items-center w-[75%] h-[400px] rounded-large bg-white">
                    <div className="flex flex-col justify-center max-w-[35%] h-full rounded-large px-[40px] bg-paleMorningBlueSky shadow-slight sm:max-w-[100%] lg:max-w-[35%]">
                        <h2 className="h2">FitSphere</h2>
                        <h4 className="h4">Get Fit, Stay Fit</h4>
                        <p className="text-justify mt-[10px]">
                            We're more than just a place to break a sweat. We're
                            more than just a place to break a sweat. We're your
                            fitness sanctuary and your second home, whether
                            you're an athlete or just a beginner. We've got
                            something for everyone.
                        </p>
                    </div>
                    <div className="flex flex-1 h-full justify-center items-end sm:hidden lg:flex">
                        <img
                            src="/src/assets/img/white-woman-workout.png"
                            alt="fitness-class-banner"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
