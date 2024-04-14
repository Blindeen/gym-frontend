import Navbar from '../../components/Navbar';

interface ServiceItem {
    header: string;
    imgSrc: string;
    altText: string;
    description: string;
}

const serviceItems: ServiceItem[] = [
    {
        header: 'Personal training',
        imgSrc: '/src/assets/img/personal-training.png',
        altText: 'personal-training',
        description: 'One-on-one training with our experienced trainers.',
    },
    {
        header: 'Group Classes',
        imgSrc: '/src/assets/img/group-classes.png',
        altText: 'gym-classes',
        description: 'Join our group fitness classes for a fun workout.',
    },
    {
        header: 'Nutrition Guidance',
        imgSrc: '/src/assets/img/protein-shake.png',
        altText: 'protein-shake',
        description: 'Get expert advice on your diet and nutrition.',
    },
];

const LandingPage = () => {
    const serviceElements = serviceItems.map((item, idx) => (
        <div
            key={idx}
            className="flex flex-col justify-center items-center rounded-large bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.5)] sm:p-0 sm:w-[80%] lg:p-[20px] lg:w-auto"
        >
            <h4 className="h4 mb-4">{item.header}</h4>
            <img src={item.imgSrc} alt={item.altText} />
            <p className="text-justify p-2.5">{item.description}</p>
        </div>
    ));

    return (
        <>
            <div className="flex flex-col items-center gap-[40px] rounded-b-large pb-[75px] bg-gradient-to-t from-blue from-0.1% via-darkNostalgiaSkyBlue via-51.5% to-forrestLagoon to-100.2%">
                <Navbar />
                <div className="flex items-center h-[400px] rounded-large bg-white sm:w-[90%] lg:w-[75%]">
                    <div className="flex flex-col justify-center h-full rounded-large px-[40px] bg-paleMorningBlueSky shadow-slight sm:max-w-[100%] lg:max-w-[35%]">
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
                    <div className="flex-1 h-full justify-center items-end pointer-events-none select-none sm:hidden lg:flex">
                        <img
                            src="/src/assets/img/white-woman-workout.png"
                            alt="fitness-class-banner"
                        />
                    </div>
                </div>
            </div>
            <h2 className="h2 text-center my-3">Our services</h2>
            <div className="flex justify-evenly flex-wrap my-[40px] sm:gap-y-5 lg:gap-0">
                {serviceElements}
            </div>
        </>
    );
};

export default LandingPage;
